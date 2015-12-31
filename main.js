var NoiseBuffer = require('./index');
var context = new AudioContext();

document.getElementById('white').addEventListener('click', function() {
  var source = context.createBufferSource();
  source.buffer = NoiseBuffer(0.2);
  source.connect(context.destination);
  source.start(context.currentTime);
});

document.getElementById('pink').addEventListener('click', function() {
  var source = context.createBufferSource();
  source.buffer = NoiseBuffer(0.2, 'pink');
  source.connect(context.destination);
  source.start(context.currentTime);
});

document.getElementById('brown').addEventListener('click', function() {
  var source = context.createBufferSource();
  source.buffer = NoiseBuffer(0.2, 'brown');
  source.connect(context.destination);
  source.start(context.currentTime);
});
