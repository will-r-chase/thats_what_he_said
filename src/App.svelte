<script>
  import * as copy from '../data/copy.json';
  import CardList from './CardList.svelte';
  import Histogram from './Histogram.svelte';
  import Youtube from './Youtube.svelte';
  import WindowWrapper from './WindowWrapper.svelte';
  console.log(copy);
</script>

<main>
  <WindowWrapper title="supercut.mp4">
    <Youtube videoId="SZMnFsA-S8k" width="1000" height="600" />
  </WindowWrapper>
  <WindowWrapper title="timeline.jpg">
    <Histogram />
  </WindowWrapper>
  <CardList />
</main>

<style>
  main {
    background-image: url('../static/img/windows_clouds_bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
