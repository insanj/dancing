# dancing

🪩  add a dancing carrot or custom icon to an HTML element, tiny js library used for dialogue boxes in https://oogycanyouhelp.com

🚀 Try the live example here on Github Pages! [https://insanj.github.io/dancing/example/](https://insanj.github.io/dancing/example/)

## Install

Built with Typescript, compiled for use in any modern browser through the `OogyDancing.min.js` file.

```js
import { OogyDancing } from "OogyDancing.min.js";
```

```html
<script src="OogyDancing.min.js"></script>
```

For development or Node.js use:

```bash
npm install oogy-dancing
```


## Usage

To learn how to use this module, check out [OogyDancing.ts](src/OogyDancing.ts), which is full of documentation and comments about how to use the API and what its full capabilities are.

See [example/](example/) as well as the `package.json` command `npm run example` for a demo of it in action. Below, a snippet of the example's [index.html](example/index.html):

```html
<script type="module">

  import { 
    OogyDancing
  } from "/dist/OogyDancing.min.js";

  const element = document.getElementById("dialogue"); // make sure this element has position: relative (or its parent, or one of its children)
  const text = "Hello, Github! This is oogy-dancing, a simple but powerful tool for web-based video games.";

  element.textContent = text;
  
  const dancer = new OogyDancing.OogyDancer();
  dancer.attach(element);

  console.log("oogy-dancing example has started its dance", dancer, element);

</script>
```

The default options are currently:

```js
export const kOogyDancingOptionsDefault: OogyDancingOptions = {
  kind: OogyDancingKind.carrot,
  duration: 500,
  width: 20,
  height: 20,
  distance: 10,
  horizontal: OogyDancingAlign.end,
  horizontalInset: 0,
  vertical: OogyDancingAlign.end,
  verticalInset: 20
}
```

## Development

To begin development on this module, clone the repo and run `npm install` to grab all the needed development dependencies. Then, use `npm start` to turn the `src/*.ts` -> `dist/*.js`, then use `npm run release` to turn the `.js` to `.min.js`. See `package.json` to learn how these scripts work.

It can be helpful to make sure your IDE is using the same Typescript version as `package.json`. For example, in Visual Studio Code, open a `.ts` file and use the shortcut SHIFT+COMMAND+P and choose `TypeScript: > Select TypeScript Version...`.


## Author

```
Julian Weiss @insanj
dancing@oogycanyouhelp.com
github.com/insanj
(c) 2022
```


## License

```
MIT License

Copyright (c) 2022 Julian Weiss

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```