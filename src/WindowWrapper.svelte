<script>
  export let title = '';
</script>

<div class="border-wrapper">
  <div class="window-bg">
    <div class="top-bar">
      <span class="title">{title}</span>
      <div class="close-btn"></div>
      <div class="full-btn"></div>
      <div class="min-btn"></div>
    </div>
    <div class="window-inner">
      <slot />
    </div>
  </div>
</div>

<style>
  .border-wrapper {
    border: 0.5px solid #c3c3c3;
    margin: 10px;
    display: inline-block;
  }
  .window-bg {
    position: relative;
    background: #c0c0c0;
    padding: 0px;
    border-width: 2px;
    border-color: #f9f9f9 #424242 #424242 #f9f9f9;
    border-style: outset;
  }
  .top-bar {
    position: relative;
    background: #010282;
    padding: 0;
    margin: 0;
    height: 25px;
  }
  .close-btn {
    position: absolute;
    top: 4px;
    right: 4px;
    width: 16px;
    height: 16px;
    background: #c3c3c3;
    border-width: 1px;
    border-color: #f9f9f9 #424242 #424242 #f9f9f9;
    border-style: outset;
    box-sizing: border-box;
  }
  .close-btn::before {
    content: '×';
    position: absolute;
    top: -5.5px;
    left: 1px;
    font-size: 20px;
  }
  .full-btn {
    position: absolute;
    top: 4px;
    right: 24px;
    width: 16px;
    height: 16px;
    background: #c3c3c3;
    border-width: 1px;
    border-color: #f9f9f9 #424242 #424242 #f9f9f9;
    border-style: outset;
    box-sizing: border-box;
  }
  .full-btn::before {
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    width: 11px;
    height: 11px;
    border: 2px solid black;
    box-sizing: border-box;
  }
  .min-btn {
    position: absolute;
    top: 4px;
    right: 44px;
    width: 16px;
    height: 16px;
    background: #c3c3c3;
    border-width: 1px;
    border-color: #f9f9f9 #424242 #424242 #f9f9f9;
    border-style: outset;
    box-sizing: border-box;
  }
  .min-btn::before {
    content: '_';
    position: absolute;
    top: -10px;
    left: 1.5px;
    font-size: 20px;
  }
  .title {
    position: absolute;
    color: white;
    font-family: sans-serif;
    font-size: 12px;
    top: 5px;
    left: 10px;
  }
  .window-inner {
    position: relative;
    background: #c3c3c3;
    padding: 10px;
    box-sizing: border-box;
    margin: 0;
  }
</style>
