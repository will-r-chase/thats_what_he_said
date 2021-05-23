<script>
  import * as copy from '../../data/copy.json';
  import Card from './Card.svelte';
  import Histogram from './Histogram.svelte';
  import Supercut from './Supercut.svelte';
  import WindowWrapper from './WindowWrapper.svelte';
  import {
    quoteStore,
    quoteIndexStore,
    currentQuoteStore
  } from '../../stores/quoteStore.js';

  let quotes = $quoteStore;
  $: currentQuote = $currentQuoteStore[0];
</script>

<section class="main-viz">
  <article class="video">
    <WindowWrapper title="supercut.mp4">
      <Supercut videoId="SZMnFsA-S8k" width="1000" height="600" />
    </WindowWrapper>
  </article>
  {#if currentQuote.lines}
    <article class="card">
      <Card quote="{currentQuote}" />
    </article>
  {/if}
  <article class="timeline">
    <WindowWrapper title="timeline.jpg">
      <Histogram />
    </WindowWrapper>
  </article>
  <!-- <CardList /> -->
</section>

<style>
  section {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: var(--background);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    grid-template-areas:
      'video video card'
      'timeline timeline timeline';
  }
  .video {
    grid-area: video;
  }
  .card {
    grid-area: card;
    margin-top: 1rem;
  }
  .timeline {
    grid-area: timeline;
  }
</style>
