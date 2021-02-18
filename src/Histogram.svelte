<script>
  import * as copy from '../data/copy.json';
  import * as d3 from 'd3';
  let quotes = copy.misquotes;

  let quotes_nested = d3.groups(quotes, d => d.season, d => d.ep_title);
  console.log(quotes_nested);
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
                <div class="paper"></div>
              {/if}
            {/each}
          </div>
        {/each}
      </div>
    </div>
  {/each}
</div>

<style>
  .wrapper {
    background: #c4c4c4;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    padding: 20px;
  }
  .season-wrapper {
    display: flex;
    flex-direction: column-reverse;
    text-align: center;
  }
  .season {
    height: 90%;
    background: #e29090;
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
    background: #5f6398;
    margin: 0px 2px;
    display: flex;
    flex-direction: column-reverse;
    padding: 2px;
  }
  .paper {
    height: 17px;
    width: 13px;
    background: #fff;
    border: 1px solid black;
    margin-bottom: 2px;
  }
</style>
