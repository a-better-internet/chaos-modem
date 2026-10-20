(() => {
  'use strict';

  // ---------- Sample Library ----------
  const MODEM_URLS = [
    "https://thelossless.neocities.org/Modem/buzzz.wav",
    "https://thelossless.neocities.org/Modem/a%20response.wav",
    "https://thelossless.neocities.org/Modem/attack.wav",
    "https://thelossless.neocities.org/Modem/broken%20aux.wav",
    "https://thelossless.neocities.org/Modem/buzz%20seq.wav",
    "https://thelossless.neocities.org/Modem/clean%20tone.wav",
    "https://thelossless.neocities.org/Modem/clicky%20bad%20sound.wav",
    "https://thelossless.neocities.org/Modem/clicky%20beeps.wav",
    "https://thelossless.neocities.org/Modem/clicky%20tone.wav",
    "https://thelossless.neocities.org/Modem/frag%201.wav",
    "https://thelossless.neocities.org/Modem/frag%202.wav",
    "https://thelossless.neocities.org/Modem/hi%20beep.wav",
    "https://thelossless.neocities.org/Modem/lo%20noise.wav",
    "https://thelossless.neocities.org/Modem/loq%20fuzz.wav",
    "https://thelossless.neocities.org/Modem/loud%20noise.wav",
    "https://thelossless.neocities.org/Modem/melodic.wav",
    "https://thelossless.neocities.org/Modem/mid%20noise.wav",
    "https://thelossless.neocities.org/Modem/noise%203.wav",
    "https://thelossless.neocities.org/Modem/noise%204.wav",
    "https://thelossless.neocities.org/Modem/noise%205.wav",
    "https://thelossless.neocities.org/Modem/noise%20b.wav",
    "https://thelossless.neocities.org/Modem/noise%20loud.wav",
    "https://thelossless.neocities.org/Modem/noise%20wash%20lo.wav",
    "https://thelossless.neocities.org/Modem/noise%20wash%20mid.wav",
    "https://thelossless.neocities.org/Modem/noisy%20maj%20third.wav",
    "https://thelossless.neocities.org/Modem/offset.wav",
    "https://thelossless.neocities.org/Modem/radio%20beep.wav",
    "https://thelossless.neocities.org/Modem/ringing.wav",
    "https://thelossless.neocities.org/Modem/sequence%20m.wav",
    "https://thelossless.neocities.org/Modem/sine%20shell%20up.wav",
    "https://thelossless.neocities.org/Modem/sine%20shell.wav",
    "https://thelossless.neocities.org/Modem/sine%20short.wav",
    "https://thelossless.neocities.org/Modem/soft%20noise%20click.wav",
    "https://thelossless.neocities.org/Modem/squelch%20noise%202.wav",
    "https://thelossless.neocities.org/Modem/squelch%20noise%203.wav",
    "https://thelossless.neocities.org/Modem/squelch%20noise.wav",
    "https://thelossless.neocities.org/Modem/swell%201.wav",
    "https://thelossless.neocities.org/Modem/tone%20noise%20click.wav",
    "https://thelossless.neocities.org/Modem/tt.wav",
    "https://thelossless.neocities.org/Modem/two%20tone%20wobble.wav",
    "https://thelossless.neocities.org/Modem/two%20tone.wav",
    "https://thelossless.neocities.org/Modem/twopart.wav",
    "https://thelossless.neocities.org/Modem/wn%20beep.wav",
    "https://thelossless.neocities.org/Modem/plate%20beep%201.wav",
    "https://thelossless.neocities.org/Modem/plate%20beep%202.wav",
    "https://thelossless.neocities.org/Modem/plate%20beep%203.wav",
    "https://thelossless.neocities.org/Modem/plate%20beep%204.wav",
    "https://thelossless.neocities.org/Modem/plate%20beep%205.wav",
    "https://thelossless.neocities.org/Modem/plate%20beep%206.wav",
    "https://thelossless.neocities.org/Modem/plate%20beep%207.wav",
    "https://thelossless.neocities.org/Modem/plate%20beep%208.wav",
    "https://thelossless.neocities.org/Modem/plate%20beep%209.wav",
    "https://thelossless.neocities.org/Modem/plate%20beep%2010.wav",
    "https://thelossless.neocities.org/Modem/plate%20beep%2011.wav",
    "https://thelossless.neocities.org/Modem/plate%20beep%2012.wav",
    "https://thelossless.neocities.org/Modem/plate%20beep%2013.wav",
    "https://thelossless.neocities.org/Modem/plate%20beep%2014.wav",
    "https://thelossless.neocities.org/Modem/plate%20beep%2015.wav",
    "https://thelossless.neocities.org/Modem/plate%20beep%2016.wav",
    "https://thelossless.neocities.org/Modem/plate%20beep%2017.wav",
    "https://thelossless.neocities.org/Modem/plate%20beep%2018.wav",
    "https://thelossless.neocities.org/Modem/plate%20beep%2019.wav",
    "https://thelossless.neocities.org/Modem/plate%20beep%2020.wav",
    "https://thelossless.neocities.org/Modem/plate%20beep%2021.wav"
  ];

  // ---------- DOM Helpers ----------
  const $ = (sel, el=document) => el.querySelector(sel);
  const $$ = (sel, el=document) => Array.from(el.querySelectorAll(sel));
  const byId = id => document.getElementById(id);

  // ---------- UI Refs ----------
  const btnStart   = byId('btnStart');
  const btnStop    = byId('btnStop');
  const btnArm     = byId('btnArm');
  const btnRand    = byId('btnRandomize');
  const btnPanic   = byId('btnPanic');
  const libCount   = byId('libCount');
  const libBar     = byId('libBar');
  const libState   = byId('libState');
  const readyPads  = byId('readyPads');
  const statusEl   = byId('status');
  const clockEl    = byId('clock');

  const masterVol  = byId('masterVol');
  const reverbMix  = byId('reverbMix');
  const freeRun    = byId('freeRun');
  const globalDensity = byId('globalDensity');
  const fadeMs     = byId('fadeMs');
  const sliceMin   = byId('sliceMin');
  const sliceMax   = byId('sliceMax');
  const grainMs    = byId('grainMs');
  const overlap    = byId('overlap');
  const bpm        = byId('bpm');
  const syncSlices = byId('syncSlices');
  const sliceMinNote = byId('sliceMinNote');
  const sliceMaxNote = byId('sliceMaxNote');
  const sliceModeHint = byId('sliceModeHint');
  const syncRangeGroup = byId('syncRangeGroup');

  const chCards = $$('#chGrid .ch');

  // ---------- Clock ----------
  const tickClock = () => {
    const d = new Date();
    clockEl.textContent = d.toLocaleString();
  };
  setInterval(tickClock, 1000);
  tickClock();

  // ---------- Pre-computed Grain Envelope (Hann Window) ----------
  const HANN_SIZE = 512;
  const hannWindow = new Float32Array(HANN_SIZE);
  for (let i = 0; i < HANN_SIZE; i++) {
    hannWindow[i] = 0.5 * (1 - Math.cos(2 * Math.PI * i / (HANN_SIZE - 1)));
  }

  // ---------- Audio Engine ----------
  let audioCtx = null;
  let masterGain, limiter, reverbConvolver, reverbGain, dryBus;
  let libraryBuffers = [];
  let armed = false;
  let running = false;

  function fromSemitones(st) { return Math.pow(2, st / 12); }
  function clamp(v, min, max) { return Math.min(max, Math.max(min, v)); }

  function noteToBeats(v) {
    if (v.includes('/')) {
      const [a, b] = v.split('/').map(Number);
      return a / b;
    }
    const n = Number(v);
    return isFinite(n) ? n : 1;
  }

  function beatsToSeconds(beats, bpmVal) {
    return (60 / Math.max(1, bpmVal)) * beats;
  }

  function updateSliceModeHint() {
    if (syncSlices && syncSlices.checked) {
      sliceModeHint.textContent = `Slice mode: Sync (${sliceMinNote.value}–${sliceMaxNote.value}, BPM ${bpm.value})`;
    } else {
      sliceModeHint.textContent = `Slice mode: Free (${sliceMin.value}–${sliceMax.value} s)`;
    }
  }

  // Raised-cosine fade curve for smooth voice envelopes
  function makeFadeCurve(peak, rising, steps) {
    steps = steps || 128;
    const curve = new Float32Array(steps);
    for (let i = 0; i < steps; i++) {
      const t = i / (steps - 1);
      const w = 0.5 - 0.5 * Math.cos(Math.PI * t);
      curve[i] = peak * (rising ? w : 1 - w);
    }
    return curve;
  }

  // Apply smooth fade-in / sustain / fade-out to a gain AudioParam
  function applyVoiceEnvelope(param, vol, startTime, dur, fadeTimeMs) {
    var fade = Math.min(fadeTimeMs / 1000, dur * 0.45);
    if (fade < 0.001) {
      param.value = vol;
      return;
    }
    param.value = 0;
    param.setValueCurveAtTime(makeFadeCurve(vol, true), startTime, fade);
    param.setValueCurveAtTime(makeFadeCurve(vol, false), startTime + dur - fade, fade);
  }

  // Normalized procedural impulse response for reverb
  function makeImpulseResponse(ctx, seconds, decay) {
    seconds = seconds || 2.5;
    decay = decay || 2.0;
    const rate = ctx.sampleRate;
    const length = Math.floor(seconds * rate);
    const impulse = ctx.createBuffer(2, length, rate);
    for (let ch = 0; ch < 2; ch++) {
      const data = impulse.getChannelData(ch);
      let peak = 0;
      for (let i = 0; i < length; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, decay);
        peak = Math.max(peak, Math.abs(data[i]));
      }
      if (peak > 0) {
        const norm = 0.7 / peak;
        for (let i = 0; i < length; i++) data[i] *= norm;
      }
    }
    return impulse;
  }

  function initAudio() {
    if (audioCtx) return;
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    // Dry bus with headroom for 4-channel sum
    dryBus = audioCtx.createGain();
    dryBus.gain.value = 0.65;

    // Reverb chain (connected once here, not per-voice)
    reverbConvolver = audioCtx.createConvolver();
    reverbConvolver.buffer = makeImpulseResponse(audioCtx, 2.6, 2.4);
    reverbGain = audioCtx.createGain();
    reverbGain.gain.value = +reverbMix.value;

    masterGain = audioCtx.createGain();
    masterGain.gain.value = +masterVol.value;

    // Soft limiter prevents clipping at the output stage
    limiter = audioCtx.createDynamicsCompressor();
    limiter.threshold.value = -3;
    limiter.knee.value = 6;
    limiter.ratio.value = 20;
    limiter.attack.value = 0.002;
    limiter.release.value = 0.1;

    // Signal chain:
    //   voices -> dryBus ---------> masterGain -> limiter -> destination
    //   voices -> reverbSend -> convolver -> reverbGain -> masterGain
    dryBus.connect(masterGain);
    reverbConvolver.connect(reverbGain);
    reverbGain.connect(masterGain);
    masterGain.connect(limiter);
    limiter.connect(audioCtx.destination);

    engine.buses = { dry: dryBus, reverb: { node: reverbConvolver, gain: reverbGain } };
  }

  // ---------- Library Preload ----------
  async function preloadLibrary(urls) {
    const total = urls.length;
    libraryBuffers = new Array(total);
    libCount.textContent = `0 / ${total}`;
    libBar.style.width = '0%';
    libState.textContent = 'PRELOADING';

    const decodeOne = async (url, idx) => {
      const res = await fetch(url);
      const arr = await res.arrayBuffer();
      const buf = await audioCtx.decodeAudioData(arr);
      libraryBuffers[idx] = { url, buffer: buf };
      const loaded = libraryBuffers.filter(Boolean).length;
      libCount.textContent = `${loaded} / ${total}`;
      libBar.style.width = `${Math.round(loaded / total * 100)}%`;
    };

    for (let i = 0; i < urls.length; i++) {
      try { await decodeOne(urls[i], i); }
      catch (e) { console.warn('Failed to load', urls[i], e); }
    }

    libState.textContent = 'READY';
    libState.classList.add('ready');
    $$('.pad', readyPads).forEach(p => p.classList.add('active'));
    btnStart.disabled = false;
    btnArm.disabled = false;
    btnRand.disabled = false;
    btnPanic.disabled = false;
    statusEl.textContent = 'Library loaded. Click Start, then Arm Channels.';
  }

  // ---------- Channel Engine ----------
  const engine = {
    buses: null,
    channels: [],
    allVoices: new Set()
  };

  function pickRandomBuffer() {
    const valid = libraryBuffers.filter(Boolean);
    if (valid.length === 0) return null;
    return valid[Math.floor(Math.random() * valid.length)];
  }

  function randomSlice(buffer, minSec, maxSec) {
    const len = buffer.duration;
    if (syncSlices && syncSlices.checked) {
      const notes = ["1/16","1/8","1/4","1/2","1","2","4","8"];
      const minIdx = Math.max(0, notes.indexOf(sliceMinNote.value));
      const maxIdx = Math.max(minIdx, notes.indexOf(sliceMaxNote.value));
      const pickIdx = Math.floor(minIdx + Math.random() * (maxIdx - minIdx + 1));
      const beats = noteToBeats(notes[pickIdx]);
      const dur = Math.min(beatsToSeconds(beats, +bpm.value), len);
      const maxStart = Math.max(0, len - dur);
      const start = Math.random() * maxStart;
      return { start, dur };
    } else {
      const dur = Math.min(Math.max(minSec + Math.random() * (maxSec - minSec), 0.05), len);
      const maxStart = Math.max(0, len - dur);
      const start = Math.random() * maxStart;
      return { start, dur };
    }
  }

  function createVoice(ch, item, pitchSt, fadeTimeMs, minSec, maxSec, vol) {
    const ctx = audioCtx;
    const { buffer, url } = item;
    const { start, dur } = randomSlice(buffer, minSec, maxSec);

    const src = ctx.createBufferSource();
    src.buffer = buffer;
    src.playbackRate.value = fromSemitones(pitchSt);

    const gain = ctx.createGain();
    const reverbSend = ctx.createGain();
    reverbSend.gain.value = 0.3;

    const now = ctx.currentTime;
    const end = now + dur;

    applyVoiceEnvelope(gain.gain, vol, now, dur, fadeTimeMs);

    src.connect(gain);
    gain.connect(engine.buses.dry);
    gain.connect(reverbSend);
    reverbSend.connect(engine.buses.reverb.node);

    src.start(now, start, dur);
    src.stop(end + 0.02);

    const voice = { src, gain, reverbSend, url, stopAt: end + 0.1 };
    src.onended = () => {
      try { gain.disconnect(); } catch (e) {}
      try { reverbSend.disconnect(); } catch (e) {}
      engine.allVoices.delete(voice);
    };
    engine.allVoices.add(voice);

    const nowPlaying = $('.nowplaying', ch.card);
    if (nowPlaying) nowPlaying.textContent = decodeURIComponent(url.split('/').pop());

    return voice;
  }

  function createGranularVoice(ch, item, pitchSt, fadeTimeMs, minSec, maxSec, vol) {
    const ctx = audioCtx;
    const { buffer, url } = item;
    const { start: sliceStart, dur: sliceDurSrc } = randomSlice(buffer, minSec, maxSec);
    const pitchRate = fromSemitones(pitchSt);

    const voiceGain = ctx.createGain();
    const reverbSend = ctx.createGain();
    reverbSend.gain.value = 0.3;
    voiceGain.connect(engine.buses.dry);
    voiceGain.connect(reverbSend);
    reverbSend.connect(engine.buses.reverb.node);

    const grainSize = Math.max(0.02, (+grainMs.value) / 1000);
    const ov = Math.min(0.95, Math.max(0, +overlap.value));
    const period = grainSize * (1 - ov);

    const stretch = ch.state.stretch || 1.0;
    const totalOut = sliceDurSrc * stretch;

    const now = ctx.currentTime;

    applyVoiceEnvelope(voiceGain.gain, vol, now, totalOut, fadeTimeMs);

    // Schedule grains with Hann window envelopes
    const N = Math.max(1, Math.ceil(totalOut / Math.max(0.005, period)));
    let readPos = sliceStart;
    const readEnd = Math.min(buffer.duration, sliceStart + sliceDurSrc);

    for (let i = 0; i < N; i++) {
      const startTime = now + i * period;
      if (startTime >= now + totalOut) break;

      const src = ctx.createBufferSource();
      src.buffer = buffer;
      src.playbackRate.value = pitchRate;

      const g = ctx.createGain();
      g.gain.value = 0;
      g.gain.setValueCurveAtTime(hannWindow, startTime, grainSize);

      src.connect(g);
      g.connect(voiceGain);

      const maxReadable = Math.max(0, readEnd - readPos);
      const playDur = Math.min(grainSize, maxReadable);
      if (playDur <= 0) break;

      try { src.start(startTime, readPos, playDur); } catch (e) {}

      readPos += period / Math.max(0.001, stretch);
    }

    const voice = { url, stopAt: now + totalOut + 0.05, node: voiceGain, reverbSend };
    engine.allVoices.add(voice);
    const nowPlaying = $('.nowplaying', ch.card);
    if (nowPlaying) nowPlaying.textContent = decodeURIComponent(url.split('/').pop());

    const endTimer = setTimeout(() => {
      try { voiceGain.disconnect(); } catch (e) {}
      try { reverbSend.disconnect(); } catch (e) {}
      engine.allVoices.delete(voice);
    }, Math.ceil((totalOut + 0.15) * 1000));
    voice._endTimer = endTimer;
    return voice;
  }

  function Channel(index) {
    const card = chCards[index];
    const enableEl   = $('.ch-enable', card);
    const volEl      = $('.ch-vol', card);
    const pitchEl    = $('.ch-pitch', card);
    const densEl     = $('.ch-density', card);
    const stretchEnEl = $('.ch-stretch-en', card);
    const stretchEl  = $('.ch-stretch', card);
    const stretchValEl = $('.ch-stretch-val', card);
    const soloBtn    = $('.ch-solo', card);
    const muteBtn    = $('.ch-mute', card);
    const nextBtn    = $('.ch-next', card);

    const state = {
      enabled: enableEl.checked,
      muted: false,
      solo: false,
      vol: +volEl.value,
      pitch: +pitchEl.value,
      density: +densEl.value,
      stretchEnabled: !!(stretchEnEl && stretchEnEl.checked),
      stretch: stretchEl ? (+stretchEl.value / 100) : 1.0,
      nextTimer: null,
      card
    };

    function scheduleNext(immediate) {
      if (!running || !armed || !state.enabled) return;
      const dens = clamp((+globalDensity.value + state.density) / 2, 0, 1);
      const minS = +sliceMin.value;
      const maxS = Math.max(minS + 0.1, +sliceMax.value);
      const fade = +fadeMs.value;
      const vol  = state.muted ? 0 : state.vol;

      const playNow = () => {
        const item = pickRandomBuffer();
        if (!item) return;
        if (state.stretchEnabled && (grainMs && overlap)) {
          createGranularVoice(api, item, state.pitch, fade, minS, maxS, vol);
        } else {
          createVoice(api, item, state.pitch, fade, minS, maxS, vol);
        }
      };

      if (immediate) {
        playNow();
      } else {
        const base = 1.6;
        const jitter = Math.random() * 0.75;
        const delay = base * (1.0 - dens) + jitter;
        state.nextTimer = setTimeout(() => {
          if (running && armed && state.enabled && freeRun.checked) {
            playNow();
            scheduleNext(false);
          }
        }, Math.max(60, delay * 1000));
      }
    }

    function clearTimer() {
      if (state.nextTimer) {
        clearTimeout(state.nextTimer);
        state.nextTimer = null;
      }
    }

    if (stretchValEl && stretchEl) {
      stretchValEl.textContent = Math.round(+stretchEl.value);
    }
    if (stretchEnEl) {
      stretchEnEl.addEventListener('change', e => { state.stretchEnabled = !!e.target.checked; });
    }
    if (stretchEl) {
      stretchEl.addEventListener('input', e => {
        state.stretch = (+e.target.value) / 100;
        if (stretchValEl) stretchValEl.textContent = Math.round(+e.target.value);
      });
    }

    const api = {
      index, card, state,
      start() { clearTimer(); scheduleNext(true); scheduleNext(false); },
      stop() { clearTimer(); },
      setEnabled(v) {
        state.enabled = v;
        if (running && armed && v) { scheduleNext(true); scheduleNext(false); }
      },
      setVol(v) { state.vol = v; },
      setPitch(v) { state.pitch = v; },
      setDensity(v) { state.density = v; },
      soloOn() { state.solo = true; muteBtn.disabled = true; applySoloMute(); },
      soloOff() { state.solo = false; muteBtn.disabled = false; applySoloMute(); },
      muteOn() { state.muted = true; applySoloMute(); },
      muteOff() { state.muted = false; applySoloMute(); },
      nextNow() { scheduleNext(true); }
    };

    enableEl.addEventListener('change', e => api.setEnabled(e.target.checked));
    volEl.addEventListener('input', e => api.setVol(+e.target.value));
    pitchEl.addEventListener('input', e => api.setPitch(+e.target.value));
    densEl.addEventListener('input', e => api.setDensity(+e.target.value));

    soloBtn.addEventListener('click', () => {
      if (state.solo) { api.soloOff(); soloBtn.textContent = 'Solo'; }
      else { api.soloOn(); soloBtn.textContent = 'Unsolo'; }
    });
    muteBtn.addEventListener('click', () => {
      if (state.muted) { api.muteOff(); muteBtn.textContent = 'Mute'; }
      else { api.muteOn(); muteBtn.textContent = 'Unmute'; }
    });
    nextBtn.addEventListener('click', () => api.nextNow());

    return api;
  }

  function applySoloMute() {
    const anySolo = engine.channels.some(c => c.state.solo);
    engine.channels.forEach(ch => {
      const card = ch.card;
      if (anySolo) {
        card.style.opacity = ch.state.solo ? '1' : '0.6';
      } else {
        card.style.opacity = '1';
      }
    });
  }

  // ---------- Transport ----------
  function startEngine() {
    if (!audioCtx) initAudio();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    running = true;
    btnStart.disabled = true;
    btnStop.disabled  = false;
    statusEl.textContent = 'Running…';
    if (armed) engine.channels.forEach(ch => ch.start());
  }

  function stopEngine() {
    running = false;
    btnStart.disabled = false;
    btnStop.disabled  = true;
    statusEl.textContent = 'Stopped.';
    engine.channels.forEach(ch => ch.stop());
  }

  function panic() {
    engine.allVoices.forEach(v => {
      try { if (v.src) v.src.stop(0); } catch (e) {}
      try { if (v.gain) v.gain.disconnect(); } catch (e) {}
      try { if (v.node) v.node.disconnect(); } catch (e) {}
      try { if (v.reverbSend) v.reverbSend.disconnect(); } catch (e) {}
      if (v._endTimer) clearTimeout(v._endTimer);
    });
    engine.allVoices.clear();
    statusEl.textContent = 'Panic: All voices silenced.';
  }

  // ---------- Smooth Parameter Helper ----------
  function smoothParam(param, value) {
    const now = audioCtx.currentTime;
    param.cancelScheduledValues(now);
    param.setValueAtTime(param.value, now);
    param.setTargetAtTime(value, now, 0.02);
  }

  // ---------- Global Wiring ----------
  document.addEventListener('DOMContentLoaded', async () => {
    initAudio();

    // Slice mode UI toggles
    function applySliceUi() {
      const syncOn = syncSlices.checked;
      if (syncRangeGroup) syncRangeGroup.style.display = syncOn ? '' : 'none';
      if (sliceMin) sliceMin.disabled = syncOn;
      if (sliceMax) sliceMax.disabled = syncOn;
      updateSliceModeHint();
    }
    [bpm, syncSlices, sliceMinNote, sliceMaxNote, sliceMin, sliceMax].forEach(el => {
      if (!el) return;
      el.addEventListener('input', applySliceUi);
      el.addEventListener('change', applySliceUi);
    });
    applySliceUi();

    for (let i = 0; i < 4; i++) {
      engine.channels.push(Channel(i));
    }

    masterVol.addEventListener('input', e => {
      if (masterGain && audioCtx) smoothParam(masterGain.gain, +e.target.value);
    });
    reverbMix.addEventListener('input', e => {
      if (reverbGain && audioCtx) smoothParam(reverbGain.gain, +e.target.value);
    });

    btnStart.addEventListener('click', startEngine);
    btnStop.addEventListener('click', stopEngine);
    btnPanic.addEventListener('click', panic);

    btnArm.addEventListener('click', () => {
      armed = true;
      statusEl.textContent = 'Channels armed. Adjust and enjoy.';
      if (running) engine.channels.forEach(ch => ch.start());
    });

    btnRand.addEventListener('click', () => {
      engine.channels.forEach(ch => {
        const p = (Math.random() * 24) - 12;
        const v = 0.6 + Math.random() * 0.4;
        const d = 0.35 + Math.random() * 0.5;
        ch.setPitch(+p.toFixed(2));
        ch.setVol(+v.toFixed(3));
        ch.setDensity(+d.toFixed(3));
        $('.ch-pitch', ch.card).value = ch.state.pitch;
        $('.ch-vol', ch.card).value = ch.state.vol;
        $('.ch-density', ch.card).value = ch.state.density;
      });
      sliceMin.value = (0.3 + Math.random() * 1.2).toFixed(1);
      sliceMax.value = (2.0 + Math.random() * 5.0).toFixed(1);
      globalDensity.value = (0.4 + Math.random() * 0.5).toFixed(3);
    });

    await preloadLibrary(MODEM_URLS);
  });

})();
