<script>
  import * as copy from '../data/copy.json';
  import Card from './Card.svelte';
  let quotes = copy.misquotes;
</script>

<div id="card-list-wrapper">
  {#each quotes as quote}
    {#if quote.lines}
      <Card {quote} />
    {/if}
  {/each}
</div>

<style>
  #card-list-wrapper {
    display: flex;
    flex-direction: column;
    margin: 0 1rem;
  }
</style>
