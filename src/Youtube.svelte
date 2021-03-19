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
    console.log('hello');
    player = new YT.Player(divId, {
      height,
      width,
      videoId,
      events: {
        //onReady: playerIsReady,
        //onStateChange: playerStateChange
      }
    });
  });
  //   function playerStateChange({data}){
  //     dispatch("PlayerStateChange", data)
  //     console.log(data)
  //     let strReturn = "";
  //     if(data== -1){ strReturn = "(unstarted)"}
  //     if(data== 0 ){ strReturn = "(ended)"}
  //     if(data== 1 ){ strReturn = "(playing)"}
  //     if(data== 2 ){ strReturn = "(paused)"}
  //     if(data== 3 ){ strReturn = "(buffering)"}
  //     if(data== 5 ){ strReturn = "(video cued)."}
  //     dispatch("PlayerStateChangeString", strReturn)
  //   }
  //   function playerIsReady() {
  //     dispatch("Ready");
  //     setInterval(() => {
  //       dispatch("currentPlayTime", player.getCurrentTime());
  //       //console.log(player.getCurrentTime())
  //     }, 1000);
  //   }
  //   export function play(){
  //     player.playVideo()
  //   }
</script>

<div id="{divId}"></div>
