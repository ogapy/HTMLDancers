var wavesurfer = WaveSurfer.create({
  container: '#waveform',
  waveColor: 'violet',
  autoCenter: false,
  barHeight: 0.8,
  barWidth: 2,
  responsive: true,
});
wavesurfer.load('Fantasma.mp3');


document.querySelector('button').addEventListener('click', function () {
  var context = new AudioContext();
  context.resume().then(() => {
    wavesurfer.playPause();

    window.setTimeout(() => {
      var rythm = new Rythm();
      rythm.setMusic('Fantasma.mp3');
      rythm.start();
      wavesurfer.isPlaying() ? rythm.setGain(0.001) : rythm.setGain(0);
      rythm.addRythm('main', 'kern', 0, 5, {
        min: -5,
        max: 5
      });
      rythm.addRythm('main', 'color', 0, 5, {
        from: [255, 0, 255],
        to: [0, 0, 255]
      });
      rythm.addRythm('icon', 'pulse', 0, 5, {
        min: 1,
        max: 1.5
      });
      rythm.addRythm('rythm-high', 'fontColor', 0, 5, {
        from: [255, 0, 255],
        to: [0, 0, 255]
      })
      rythm.addRythm('start-button', 'pulse', 0, 5, {
        min: 1,
        max: 1.25
      });
      rythm.addRythm('fox-img', 'borderColor', 0, 5, {
        from: [255, 0, 255],
        to: [0, 0, 255]
      });
      rythm.addRythm('fox-img', 'borderWidth', 0, 5, {
        min: 5,
        max: 10,
      });
      rythm.addRythm('fox-img', 'neon', 0, 5, {
        from: [255, 0, 255],
        to: [0, 0, 255]
      })
      rythm.addRythm('speaker', 'borderColor', 0, 5, {
        from: [255, 0, 255],
        to: [0, 0, 255]
      });
      rythm.addRythm('speaker', 'neon', 0, 5, {
        from: [255, 0, 255],
        to: [0, 0, 255]
      });
      rythm.addRythm('speaker', 'borderWidth', 0, 5, {
        min: 1,
        max: 10,
      });
    }, 500);
  });
});