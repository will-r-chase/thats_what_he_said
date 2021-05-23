import { writable, derived } from 'svelte/store';
import * as copy from '../data/copy.json';

export const quoteStore = writable(copy.misquotes);
export const quoteIndexStore = writable(1);
export const videoTimeStore = writable(0);
export const cutTimeStore = writable(0);

// videoTimeStore.subscribe(value => {
//   console.log(`videoTimeStore`, value);
// });

//need to do something for when a user skips to between two time cuts
//so something like filter to the latest time cut with a less than or equals to?
let last_time;
export const currentQuoteStore = derived(
  [quoteStore, videoTimeStore],
  ([$quoteStore, $videoTimeStore]) => {
    let cut_times = $quoteStore.map(d => +d.cut_time);
    if (cut_times.includes($videoTimeStore)) {
      last_time = $videoTimeStore;
      //console.log(`last time: ${last_time}`);
      return $quoteStore.filter(quote => +quote.cut_time === $videoTimeStore);
    } else {
      //console.log(`last time: ${last_time}`);
      return $quoteStore.filter(quote => +quote.cut_time === last_time);
    }
  }
);

// currentQuoteStore.subscribe(value => {
//   console.log(`currentQuoteStore`, value);
// });

// export const currentQuoteStore = derived(
//   [quoteIndexStore, quoteStore],
//   ([$quoteIndexStore, $quoteStore]) =>
//     $quoteStore.filter(quote => +quote.id === $quoteIndexStore)
// );
