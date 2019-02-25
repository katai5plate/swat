# swat
関数の処理時間を計測するストップウォッチ

## in Node.js
### install
```coffee
yarn add katai5plate/swat
# OR #
npm install --save katai5plate/swat
```
### usage
```js
const {swat, swatEval} = require("@katai5plate/swat");

const example_1 = () => console.log("Hello, World!");
const example_2 = "(function(){ return ['hip', 'hip']; })()";

swat(example_1);
// 1551066844009_723: 0.010009765625ms
// RETURN: undefined

swat(example_1, "test_1");
// test_1: 0.003173828125ms
// RETURN: undefined

swatEval(example_2);
// 1551066844009_219: 0.001953125ms
// RETURN: hip,hip

swatEval(example_2, "hooray!");
// hooray!: 0.0009765625ms
// RETURN: hip,hip
```
### update
```coffee
yarn upgrade @katai5plate/swat
# OR #
npm update @katai5plate/swat
```
### uninstall
```coffee
yarn remove @katai5plate/swat
# OR #
npm uninstall --save @katai5plate/swat
```

## in the WEB
### setup
```html
<script>var module={};</script><script src="https://cdn.jsdelivr.net/gh/katai5plate/swat/index.js"></script>
<script>var me=module.exports,swat=me.swat,swatEval=me.swatEval;delete module.exports;</script>
```
### usage
```js
const example_1 = () => console.log("Hello, World!");
const example_2 = "(function(){ return ['hip', 'hip']; })()";

swat(example_1);
// 1551066844009_723: 0.010009765625ms
// RETURN: undefined

swat(example_1, "test_1");
// test_1: 0.003173828125ms
// RETURN: undefined

swatEval(example_2);
// 1551066844009_219: 0.001953125ms
// RETURN: hip,hip

swatEval(example_2, "hooray!");
// hooray!: 0.0009765625ms
// RETURN: hip,hip
```
### demo
[HERE](https://katai5plate.github.io/swat/)
