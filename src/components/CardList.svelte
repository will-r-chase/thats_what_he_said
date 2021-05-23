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
    margin: 3rem;
    display: grid;
    grid-gap: 5rem;
    grid-template-columns: repeat(auto-fill, 400px);
  }
</style>
