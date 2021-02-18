<script>
  import * as copy from '../data/copy.json';
  import CardList from './CardList.svelte';
  import Histogram from './Histogram.svelte';
  console.log(copy);
</script>

<main>
  <Histogram />
  <h1>{copy.title}</h1>
  <h2>{copy.dek}</h2>
  <CardList />
</main>

<style>

</style>
