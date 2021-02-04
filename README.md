# svelte app

This is a project template for [Svelte](https://svelte.dev) apps. It was adapted from https://github.com/sveltejs/template by Will Chase (@W_R_Chase).

## Changes

This is the original sveltejs template with a few tweaks made.

1. Removed most of the existing styles
2. Removed typescript support
3. Added prettierrc for my preferred config
4. Added ArchieML google doc integration based of The Pudding (https://github.com/the-pudding/starter/blob/master/scripts/fetch-doc.js)

To use the ArchieML integration, add your google doc ID and preferred out path to the config.json file, then after turning on link sharing on your google doc, run `npm run fetch-doc`.

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit sveltejs/template svelte-app
cd svelte-app
```

_Note that you will need to have [Node.js](https://nodejs.org) installed._

## Get started

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).

## Single-page app mode

By default, sirv will only respond to requests that match files in `public`. This is to maximise compatibility with static fileservers, allowing you to deploy your app anywhere.

If you're building a single-page app (SPA) with multiple routes, sirv needs to be able to respond to requests for _any_ path. You can make it so by editing the `"start"` command in package.json:

```js
"start": "sirv public --single"
```
