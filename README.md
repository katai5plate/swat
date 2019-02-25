# swat
関数の処理時間を計測するストップウォッチ

## In Node.js
- install
```coffee
yarn add katai5plate/swat
```
- usage
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
- uninstall
```js
yarn remove @katai5plate/swat
```
