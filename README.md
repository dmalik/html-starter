## Getting started

Get started by running these 3 commands:

- Create a folder and go into it by running `mkdir my.project && cd $_`
- Clone the repo by running `git clone this .`. (The dot at the end tells git not to generate a folder and just place the content in the folder it's in.)
- Run `npm i` to install all dependencies

## NPM Scripts

### `npm start `
Runs the page in development mode. Wipes out anything already in the `build` folder and places the generated content there.

IMPORTANT: If you add new files, like an image for example, you will need to stop the server on the command line with `ctrl + c` and run `npm start` again to have those new files copied over.

### `npm run build `
Builds the page for production deployment. Wipes out anything already in the `build` folder and places the generated content there. Similar to `npm start` but doesn't add the browser-sync javascript or start a server.

## Overview

The idea of this is to give the bare minimum to get started with a modern (as of 2017) workflow. How you write your HTML/CSS/JS is up to you.

#### JS
- Uses [Babel](https://babeljs.io/) to transpile your code. Use the latest Javascript!
- NPM install any package and import it in to your JS code.
- Minifies code.

Make sure to import any code into the `src/js/index.js` file. Everything gets compiled into one file based on that file. If you need to add separate JS files you can add them from a CDN or see the 'Extra Files' section below. However, note that those files will not be minified and you won't be able to take advantage of any es2015 features.

#### CSS
- Uses PostCSS to transpile your CSS code.
- Uses the [postcss-scss](https://github.com/postcss/postcss-scss) plugin to parse mixins as custom at-rules & variables as properties, so that PostCSS plugins can then transform SCSS source code alongside CSS.
- SASS syntax with [PreCSS](https://github.com/jonathantneal/precss), used with the parser mentioned above.
- [Autoprefixer](https://github.com/postcss/autoprefixer) adds vendor prefixes to CSS rules using values from Can I Use. It is recommended by Google and used in Twitter and Taobao.
- `@import` other files as well as NPM packages
- Comes with [CSS Reset](https://github.com/shannonmoeller/reset-css) and [CSS Normalize](https://github.com/necolas/normalize.css). Keep them or comment one or both out.
- Uses the [Lost Grid](http://lostgrid.org) for the grid system. This works great with PostCSS. Make sure to [read the docs](http://lostgrid.org/docs.html) to get started. Allows completely custom grids for each section.
- Minifies code

Make sure to `@import` any other CSS into the `src/styles/main.css` file. Everything gets compiled into one file based on that file.

For CSS syntax highlighting in Atom use [this package.](https://atom.io/packages/language-postcss)

#### HTML
Directly copies over what you have in `/src/index.html` to `/build/index.html`. When you're developing it will add some JS in the `<head>` to give some extra convenience features.

#### Images
Directly copies over what you have in `/src/images/**` to `/build/images/**`. Make sure to restart the server when adding new ones if you already have it running.

#### Assets
Store any PDF's or whatever here. Directly copies over what you have in `/src/assets/**` to `/build/assets/**`. Make sure to restart the server when adding new ones if you already have it running.

## Dev Server
After running `npm start` [browser-sync](https://www.browsersync.io/) will start up. In your command line you will get access URLs that look something like this:

```
[Browsersync] Access URLs:
 ------------------------------------
       Local: http://localhost:3000
    External: http://10.1.15.170:3000
 ------------------------------------
          UI: http://localhost:3001
 UI External: http://10.1.15.170:3001
 ------------------------------------
```

This is a test server that will give us a few things like auto refresh, syncing screens across devices and things like grid overlays. You can access browser-syncs options by going to the UI URL.

The External links will only work within the wifi network you're connected to.

## Favicon

Need a favicon? [Go here.](https://realfavicongenerator.net/)

## Extra files

Need to add an extra file or 2 that's in the root? Just add this line `new CopyPlugin([{from: './src/NAME.OF.FILE', to: './' }]),` to the `webpack.config.js` file where the other `new CopyPlugin...` lines are.

Need to copy over a custom folder? Just add this line `new CopyPlugin([{ context: './src/NAME.OF.FOLDER', from: '**/*', to:'./NAME.OF.FOLDER' }]),` to the `webpack.config.js` file where the other `new CopyPlugin...` lines are.
