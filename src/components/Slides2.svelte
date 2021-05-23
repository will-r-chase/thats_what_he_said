<script>
  import Slide from './helpers/Slider.Slide.svelte';
  import ArrowKeys from './ArrowKeys.svelte';
  import Icon from './helpers/Icon.svelte';

  export let version;
  export let level;
  export let duration;
  export let text;
  export let slides;
</script>

<Slide>
  <h1>Hey this is the first slide!</h1>
  <ArrowKeys active="right" />

</Slide>
<Slide>
  <h1>This is the second slide</h1>

</Slide>

<style>
  .intro {
    font-size: 1.5em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .slide-content {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    font-size: 17px;
    justify-content: flex-start;
    padding-top: 1em;
  }

  .slide-content p {
    margin: 1em auto;
    max-width: 35em;
    padding: 0 1em;
  }

  .chart {
    width: 100%;
    user-select: none;
  }

  .intro p {
    margin: 0.5rem 0;
  }

  .level {
    opacity: 0.75;
    text-transform: uppercase;
    font-size: 0.75em;
  }

  .version {
    text-transform: capitalize;
    font-size: 2em;
  }

  .duration {
    font-size: 0.75em;
    /* text-transform: uppercase; */
  }

  .oreo {
    width: 16em;
    height: 16em;
  }

  .text {
    font-size: 1em;
  }

  .reverse {
    flex-direction: column-reverse;
    justify-content: flex-end;
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

  .complex {
    display: none;
  }

  @media only screen and (min-width: 640px) {
    .slide-content {
      font-size: 21px;
      padding: 0 4rem;
      justify-content: center;
    }

    .text {
      font-size: 1.25em;
    }

    .reverse {
      justify-content: center;
    }
    .complex {
      display: inline;
    }
  }
</style>
