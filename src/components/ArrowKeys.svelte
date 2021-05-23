<script>
  import Icon from './helpers/Icon.svelte';
  export let active;
</script>

<div>
  <span></span>
  <span class="up" class:active="{active === 'up'}">
    <Icon name="arrow-up" />
  </span>
  <span></span>
  <span class="left" class:active="{active === 'left'}">
    <Icon name="arrow-left" />
  </span>
  <span class="down" class:active="{active === 'down'}">
    <Icon name="arrow-down" />
  </span>
  <span class="right" class:active="{active === 'right'}">
    <Icon name="arrow-right" />
  </span>
</div>

<style>
  div {
    display: none;
    grid: repeat(2, 1fr) / repeat(3, 1fr);
    font-size: 1rem;
    width: 5em;
  }

  span {
    display: flex;
    align-items: center;
    padding: 0.25em;
    background-color: var(--fg);
    color: var(--off-white);
    line-height: 1;
    margin: 0.1em;
    border-radius: 4px;
    opacity: 0.3;
  }

  span:empty {
    opacity: 0;
  }

  span.active {
    opacity: 1;
  }
  span.down.active {
    animation: down 0.5s infinite alternate ease;
  }

  span.up.active {
    opacity: 1;
    animation: up 0.5s infinite alternate ease;
  }

  span.left.active {
    opacity: 1;
    animation: left 0.5s infinite alternate ease;
  }

  span.right.active {
    opacity: 1;
    animation: right 0.5s infinite alternate ease;
  }

  @keyframes down {
    0% {
      transform: translateY(0);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
    100% {
      transform: translateY(33%);
      box-shadow: 0 0 8px 4px var(--highlight);
    }
  }

  @keyframes up {
    0% {
      transform: translateY(0);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
    100% {
      transform: translateY(-33%);
      box-shadow: 0 0 8px 4px var(--highlight);
    }
  }

  @keyframes left {
    0% {
      transform: translateX(0);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
    100% {
      transform: translateX(-33%);
      box-shadow: 0 0 8px 4px var(--highlight);
    }
  }

  @keyframes right {
    0% {
      transform: translateX(0);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
    100% {
      transform: translateX(33%);
      box-shadow: 0 0 8px 4px var(--highlight);
    }
  }

  @media only screen and (min-width: 640px) {
    div {
      display: grid;
    }
  }
</style>
