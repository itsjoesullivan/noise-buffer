## NoiseBuffer

Generate `AudioBuffer`s of white noise.

## Usage

`npm install --save noise-buffer`

```javascript
var NoiseBuffer = require('noise-buffer');

var noise = NoiseBuffer(1); // One second of noise

noise instanceof AudioBuffer // true
