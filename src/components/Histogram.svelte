<script>
  import * as copy from '../../data/copy.json';
  import * as d3 from 'd3';
  import {
    quoteStore,
    quoteIndexStore,
    currentQuoteStore,
    cutTimeStore,
    videoTimeStore
  } from '../../stores/quoteStore.js';

  let quotes = $quoteStore;
  function handleClick(event) {
    videoTimeStore.update(index => +event.target.dataset.cuttime);
    cutTimeStore.update(index => +$currentQuoteStore[0].cut_time);
  }

  const colorScale = d3
    .scaleOrdinal()
    .domain([
      'non-linguistic',
      'phonological',
      'morphological',
      'syntactic',
      'semantic'
    ])
    .range(['#ffffff', '#985F5F', '#5F6398', '#DBA54E', '#6A6D5F']);

  for (let quote of quotes) {
    quote.color = quote.error_domain
      ? colorScale(quote.error_domain.toLowerCase())
      : '#000';
  }

  let quotes_nested = d3.groups(quotes, d => d.season, d => d.ep_title);
</script>

<div class="wrapper">
  {#each quotes_nested as season}
    <div class="season-wrapper">
      <div class="season-label">Season {season[0]}</div>
      <div class="season">
        {#each season[1] as episode}
          <div class="episode">
            {#each episode[1] as quote}
              {#if quote.lines}
                <div class:active="{quote.id === $currentQuoteStore[0].id}">
                  <div
                    class="paper"
                    id="{quote.id}"
                    data-cutTime="{quote.cut_time}"
                    style="background-color: {quote.color}"
                    on:click="{handleClick}"></div>
                </div>
              {/if}
            {/each}
          </div>
        {/each}
      </div>
    </div>
  {/each}
</div>

<style>
  .active {
    position: relative;
  }
  .active::before {
    content: '';
    background-color: rgba(240, 241, 118, 0.8);
    width: 19px;
    height: 22px;
    position: absolute;
    top: -2px;
    left: -3px;
  }
  .wrapper {
    background: #c4c4c4;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
  }
  .season-wrapper {
    display: flex;
    flex-direction: column-reverse;
    text-align: center;
  }
  .season {
    height: 90%;
    /* background: #e29090; */
    margin: 10px;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
  }
  .season-label {
    font-size: 1.5rem;
    font-family: 'Helvetica', sans-serif;
    font-weight: 600;
    letter-spacing: -0.04em;
  }
  .episode {
    height: 100%;
    width: 17px;
    /* background: #5f6398; */
    margin: 0px 2px;
    display: flex;
    flex-direction: column-reverse;
    padding: 2px;
  }
  .paper {
    position: relative;
    height: 17px;
    width: 13px;
    background: #fff;
    border: 1px solid black;
    margin-bottom: 2px;
    clip-path: polygon(
      0 0,
      7px 0%,
      100% 6px,
      100% 80%,
      100% 100%,
      0 100%,
      0% 80%,
      0% 20%
    );
  }
  .paper::before {
    content: '';
    position: absolute;
    top: -1px;
    right: -1px;
    width: 0;
    height: 0;
    border-bottom: 6px solid black;
    border-right: 6px solid transparent;
  }
  .paper:hover {
    cursor: pointer;
  }
</style>
