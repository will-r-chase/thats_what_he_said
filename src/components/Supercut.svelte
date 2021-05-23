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
  import {
    currentQuoteStore,
    videoTimeStore,
    cutTimeStore
  } from '../../stores/quoteStore.js';
  export let videoId;
  export let width = 640;
  export let height = 390;
  let player;
  let playerReady;
  let currentQuote;
  let divId = 'player_' + parseInt(Math.random() * 109999);

  //A dumb hack to know when the player is loaded
  //mainly needed cus can't use reactivity at non-top-level
  async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return 10;
  }
  wait().then(() => (playerReady = true));

  $: currentQuote = $currentQuoteStore[0];
  $: cutTime = $cutTimeStore;

  $: if (playerReady) {
    player.seekTo(cutTime);
    player.playVideo();
  }

  const dispatch = createEventDispatcher();
  window.addEventListener('iframeApiReady', function(e) {
    player = new YT.Player(divId, {
      height,
      width,
      videoId,
      events: {
        onReady: playerIsReady
        //onStateChange: playerStateChange
      }
    });
  });
  //   export function play(){
  //     player.playVideo()
  //   }
  function playerIsReady() {
    //This whole part is from https://stackoverflow.com/questions/65511523/how-to-listen-to-time-change-events-with-the-youtube-iframe-player-api
    // This is the source "window" that will emit the events.
    let iframeWindow = player.getIframe().contentWindow;

    // So we can compare against new updates.
    let lastTimeUpdate = 0;

    // Listen to events triggered by postMessage.
    window.addEventListener('message', function(event) {
      // Check that the event was sent from the YouTube IFrame.
      if (event.source === iframeWindow) {
        var data = JSON.parse(event.data);

        // The "infoDelivery" event is used by YT to transmit any
        // kind of information change in the player,
        // such as the current time or a playback quality change.
        if (
          data.event === 'infoDelivery' &&
          data.info &&
          data.info.currentTime
        ) {
          // currentTime is emitted very frequently,
          // but we only care about whole second changes.
          var time = Math.floor(data.info.currentTime);

          if (time !== lastTimeUpdate) {
            lastTimeUpdate = time;
            videoTimeStore.update(index => time);
            //console.log($videoTimeStore);
          }
        }
      }
    });
  }
</script>

<div id="{divId}"></div>
