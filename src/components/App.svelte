<script>
  import * as copy from '../../data/copy.json';
  import Hero from './Hero.svelte';
  import Interactive from './Interactive.svelte';
  import Tap from './helpers/Tap.svelte';
  import Slider from './helpers/Slider.svelte';
  import Slide from './helpers/Slider.Slide.svelte';
  import loadImage from '../utils/loadImage.js';
  import Slides2 from './Slides2.svelte';

  const gif = 'https://pudding.cool/assets/img/custom.gif';

  let innerWidth;
  let innerHeight;

  let sliderY;
  let activeY;
  let countY;

  let sliderX;
  let activeX;
  let countX;

  // let currentX = 0;

  const onTap = ({ detail }) => {
    if (detail === 'left') sliderX.prev();
    else if (detail === 'right') sliderX.next();
    else if (detail === 'up') sliderY.prev();
    else if (detail === 'down') sliderY.next();
    console.log(`tap ${detail}`);
  };

  // const updateArrows = () => {
  //   currentX = activeX[activeY - 1];
  // };

  let visited = [];

  const log = y => {
    if (!visited[y])
      loadImage(`${gif}?key=y&value=${visited[visited.length - 1]}`);
    visited[y] = true;
  };

  $: mobile = innerWidth < 640;
  $: full = !mobile;
  $: arrowPosition = mobile ? 'end' : 'center';
  // $: activeX.join(''), activeY, updateArrows();
  $: showArrows = activeY === 1 ? ['left', 'right'] : false;
  $: disableUD = activeY === 0 ? 'up' : activeY === countY - 1 ? 'down' : '';
  // $: disableLR =
  //   currentX === countX[activeY - 1] - 1
  //     ? 'right'
  //     : currentX === 0
  //     ? 'left'
  //     : '';
  // $: disable = [disableLR, disableUD].filter(d => d);
  $: if (activeY > 0) log(activeY);
  // $: $innerH = innerHeight;
  $: disable = [disableUD].filter(d => d);
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<Tap
  directions="{['up', 'down', 'left', 'right']}"
  {showArrows}
  {full}
  enableKeyboard="{true}"
  {arrowPosition}
  {disable}
  on:tap="{onTap}" />

<main>
  <Slider
    direction="vertical"
    bind:this="{sliderY}"
    bind:count="{countY}"
    bind:active="{activeY}">
    <Slide>
      <Hero />
    </Slide>
    <Slide>
      <Slider
        direction="horizontal"
        bind:this="{sliderX}"
        bind:count="{countX}"
        bind:active="{activeX}">
        <Slides2 />
      </Slider>
    </Slide>
    <Slide>
      <Interactive />
    </Slide>

  </Slider>
</main>

<style>
  main {
    position: relative;
    width: 100%;
    height: 100%;
  }
</style>
