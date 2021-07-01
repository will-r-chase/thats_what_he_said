<script>
  import Slide from './helpers/Slider.Slide.svelte';
  import ArrowKeys from './ArrowKeys.svelte';
  import Icon from './helpers/Icon.svelte';
  import * as copy from '../../data/copy.json';
  import WindowWrapper from './WindowWrapper.svelte';
</script>

<Slide>
  <div class="slide-content">
    <p>{copy.slide1.graf1}</p>
    <WindowWrapper>
      <img
        src="https://media.giphy.com/media/77f1tUfPqAAcciebFk/giphy.gif"
        alt="a gif of michael scott saying 'this has sort of an oaky afterbirth'
        after drinking wine" />
    </WindowWrapper>

    <ArrowKeys active="right" />
  </div>
</Slide>
<Slide>
  <div class="slide-content">
    <p>{copy.slide2.graf1}</p>
    <p>{copy.slide2.graf2}</p>
    <p>{copy.slide2.graf3}</p>
  </div>
</Slide>
<Slide>
  <div class="slide-content">
    <p>{copy.slide3.graf1}</p>

  </div>
</Slide>

<style>
  .slide-content {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    margin: 5rem auto;
    background-color: var(--background);
  }
  p {
    max-width: 600px;
    font-family: sans-serif;
    font-size: 1.2rem;
    line-height: 1.4;
  }
  p.prev,
  p.next {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    padding: 0.5em 0.75em;
    background-color: var(--fg);
    line-height: 1;
    margin: 0.1em;
    border-radius: 4px;
    font-size: 0.75em;
    display: flex;
    align-items: center;
    color: var(--off-white);
    text-transform: uppercase;
  }

  .prev span,
  .next span.arrow {
    margin-left: 0.5em;
    display: flex;
    align-items: center;
  }

  .prev {
    top: 1em;
  }

  .next {
    bottom: 1em;
  }
</style>
