<script context="module">
  let iframeApiReady = false;
  var tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  window.onYouTubeIframeAPIReady = () =>
    window.dispatchEvent(new Event('iframeApiReady'));
</script>

<script>
  import { createEventDispatcher } from 'svelte';
  export let videoId;
  export let width = 640;
  export let height = 390;
  let player;
  let divId = 'player_' + parseInt(Math.random() * 109999);

  const dispatch = createEventDispatcher();
  window.addEventListener('iframeApiReady', function(e) {
    player = new YT.Player(divId, {
      height,
      width,
      videoId,
      events: {
        //onReady: playerIsReady
        //onStateChange: playerStateChange
      }
    });
  });
  //   export function play(){
  //     player.playVideo()
  //   }
</script>

<div id="{divId}"></div>
