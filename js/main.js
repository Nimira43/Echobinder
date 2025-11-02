import { PresetManager } from './presetManager.js'
import { sounds, defaultPresets } from './soundData.js'
import { SoundManager } from './soundManager.js'
import { UI } from './ui.js'
import { Timer } from './timer.js'

class EchoBinder {
  constructor() {
    this.soundManager = new SoundManager()
    this.ui = new UI()
    this.presetManager = new PresetManager()
    this.timer = new Timer()
    this.currentSoundDtate = {}
    this.masterVolume = 100
    this.isInitialised = false
  }
}