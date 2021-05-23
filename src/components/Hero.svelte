<script>
  import ArrowKeys from './ArrowKeys.svelte';
</script>

<section>
  <h1>That's What He Said</h1>
  <h3>
    An exploration of Michael Scott's misquotes, malapropisms, and botched
    phrases
  </h3>

  <div class="instructions">
    <p>
      <span class="desktop">Use arrow keys or</span>
      tap below to navigate
    </p>
    <div class="keys">
      <ArrowKeys active="down" />
    </div>
  </div>
</section>

<style>
  section {
    position: relative;
    background-image: url('../static/img/windows_clouds_bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .instructions {
    text-transform: uppercase;
    margin-top: 2em;
    text-align: center;
  }

  .desktop {
    display: none;
  }

  .keys {
    display: flex;
    justify-content: center;
  }
</style>
