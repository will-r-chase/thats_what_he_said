<div class="postit-wrapper">
  <div class="postit">
    <slot />
  </div>
</div>

<style>
  .postit-wrapper {
    position: relative;
    filter: drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.6));
  }
  .postit {
    position: relative;
    z-index: 1;
    min-height: 420px;
    width: 420px;
    background: #f0f176;
    padding: 20px;
    clip-path: polygon(
      0 0,
      340px 0%,
      100% 80px,
      100% 80%,
      100% 100%,
      0 100%,
      0% 80%,
      0% 20%
    );
  }
  .postit::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 0;
    border-bottom: 80px solid #f6f7b0;
    border-right: 80px solid transparent;
    filter: drop-shadow(-4px 5px 9px rgba(0, 0, 0, 0.5));
  }
</style>
