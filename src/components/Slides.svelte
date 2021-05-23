<script>
  import Slide from './helpers/Slider.Slide.svelte';
  import Oreo from './Oreo.svelte';
  import Chart from './Chart.svelte';
  import Special from './Special.svelte';
  import Image from './Image.svelte';
  import ArrowKeys from './ArrowKeys.svelte';
  import Icon from './helpers/Icon.svelte';

  export let version;
  export let level;
  export let duration;
  export let text;
  export let slides;
</script>

<Slide>
  <div class="slide-content intro">
    {#if +level > 1}
      <p class="prev">
        Level {+level - 1}
        <span>
          <Icon name="arrow-up" />
        </span>
      </p>
    {/if}
    <p class="level">Level {level}</p>
    <p class="version">
      <strong>{version}</strong>
    </p>
    <Oreo {version} />
    <p class="duration">~ {duration} read</p>
    <p class="text">{text}</p>
    <ArrowKeys active="right" />
    {#if +level < 3}
      <p class="next">
        Level {+level + 1}
        <span class="complex">: {+level === 1 ? 'more' : 'most'} complex</span>
        <span class="arrow">
          <Icon name="arrow-down" />
        </span>
      </p>
    {/if}
  </div>
</Slide>

{#each slides as { text, className, chart, special, image }, i}
  <Slide>
    <div class="slide-content {className || ''}">
      {#if +level > 1 && i === slides.length - 1}
        <p class="prev">
          Level {+level - 1}
          <span>
            <Icon name="arrow-up" />
          </span>
        </p>
      {/if}

      {#if typeof text === 'string'}
        <div class="graf">
          <p>
            {@html text}
          </p>
        </div>
      {:else if typeof text === 'object'}
        <div class="graf">
          {#each text as { value }}
            <p>
              {@html value}
            </p>
          {/each}
        </div>
      {/if}

      {#if chart}
        <div class="chart">
          <Chart name="{chart}" />
        </div>
      {/if}

      {#if special}
        <div class="special">
          <Special name="{special}" />
        </div>
      {/if}

      {#if image}
        <Image name="{image}" />
      {/if}

      {#if +level < 3 && i === slides.length - 1}
        <p class="next">
          Level {+level + 1}
          <span class="arrow">
            <Icon name="arrow-down" />
          </span>
        </p>
      {/if}
    </div>
  </Slide>
{/each}

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
