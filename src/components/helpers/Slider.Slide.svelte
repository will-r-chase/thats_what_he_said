<script>
  import { getContext } from 'svelte';
  const { direction, width, height } = getContext('Slider');

  // let minH = 0;

  $: w = $direction === 'horizontal' ? `${$width}px` : '100%';
  $: h = $direction === 'vertical' ? `${$height}px` : '100%';

  // $: if ($height && !isNaN($height)) minH = Math.max($height, minH);
  // $: mh = `${minH}px`;
</script>

<div class="slide" style="width: {w}; height: {h};">
  <slot />
</div>

<style>
  .slide {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: var(--background);
  }
</style>
