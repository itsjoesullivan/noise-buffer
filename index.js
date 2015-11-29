// courtesy of http://noisehack.com/generate-noise-web-audio-api/
module.exports = function(length) {
  var sampleRate = 44100;
  var samples = length * sampleRate;
  var context = new OfflineAudioContext(1, samples, sampleRate);
  var noiseBuffer = context.createBuffer(1, samples, sampleRate);

  var output = noiseBuffer.getChannelData(0);
  for (var i = 0; i < samples; i++) {
    output[i] = Math.random() * 2 - 1;
  }
  return noiseBuffer;
};
