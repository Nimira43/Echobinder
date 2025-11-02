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
    this.currentSoundState = {}
    this.masterVolume = 100
    this.isInitialised = false
  }

  init() {
    try {
      this.ui.init()
      this.ui.renderSoundCards(sounds)
      this.setupEventListeners()
      this.loadCustomPresetsUI()
      this.loadAllSounds()
      sounds.forEach((sound) => this.currentSoundState[sound.id] = 0)
      this.isInitialised = true
    }  catch (error) {
      console.error('Failed to initialise app: ', error)
    }
  }

  setupEventListeners() {
    document.addEventListener('click', async (e) => {

    })
    
    document.addEventListener('input', async (e) => {

    })



  }
  loadAllSounds() {}
  toggleSound() {}
  toggleAllSounds() {}
  setSoundVolume() {}
  setMasterVolume() {}
  applyMasterVolumeToAll() {}
  updateMainPlayButtonState() {}
  resetAll() {}
  loadPreset() {}
  showSavePresetModal() {}
  saveCurrentPreset() {}
  deleteCustomPreset() {}
  onTimerComplete() {} 
}

document.addEventListener('DOMContentLoaded', () => {
  const app = new EchoBinder()
  app.init()
})
