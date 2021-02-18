<script>
  export let quote;
  let lines = quote.lines;
</script>

<div class="card">
  <h3>{quote.ep_title}</h3>
  <span class="season-ep">Season {quote.season},</span>
  <span class="season-ep">Episode {quote.ep_num}</span>
  <h4>What he said</h4>
  {#each lines as line}
    <div class="quote">
      <span class="speaker">{line.speaker}:</span>
      <span class="line">{line.line}</span>
    </div>
  {/each}

  <h4>Error explained</h4>
  <p>{quote.explanation}</p>

  <div class="details">
    <div class="details-item">
      <span>Error domain:</span>
      <span>{quote.error_domain}</span>
    </div>
    {#if quote.error_type}
      <div class="details-item">
        <span>Error type:</span>
        <span>{quote.error_type}</span>
      </div>
    {/if}
    <div class="details-item">
      <span>Writer:</span>
      <span>{quote.writer}</span>
    </div>

  </div>
</div>

<style>
  .card {
    border: 1px black solid;
    width: 50%;
    margin-bottom: 1rem;
    padding: 10px;
  }

  h3 {
    font-family: 'Editorial New', serif;
    font-size: 2.5rem;
    font-weight: 400;
    margin-top: 0;
    margin-bottom: -0.5rem;
  }
  h4 {
    font-family: 'Helvetica', sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: -0.04em;
    margin-bottom: 12px;
  }
  p {
    font-family: 'Helvetica', sans-serif;
    font-size: 1rem;
    line-height: 1.3em;
    margin-bottom: 40px;
  }

  .season-ep {
    font-family: 'Helvetica', sans-serif;
    font-weight: 600;
    font-size: 14px;
    color: #595959;
    margin-bottom: 48px;
  }
  .quote {
    margin-bottom: 0.5rem;
  }
  .speaker {
    font-family: 'Courier New', Courier, monospace;
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.3em;
    text-transform: capitalize;
  }
  .line {
    font-family: 'Courier New', Courier, monospace;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3em;
  }
  .details {
    font-family: 'Helvetica', sans-serif;
    font-size: 14px;
    line-height: 1.3em;
  }
  .details-item {
    margin-bottom: 0.25rem;
  }
</style>
