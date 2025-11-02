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
    this.timer = new Timer(
      () => this.onTimerComplete(),
      (minutes, seconds) => this.ui.updateTimerDisplay(minutes, seconds)
    )
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
      if (e.target.closet('.play-btn')) {
        const soundId = e.target.closest('.play-btn').dataset.sound
        await this.toggleSound(soundId)
      }
      
      if (e.target.closet('.delete-preset')) {
        e.stopPropagation()
        const presetId = e.target.closest('.delete-preset').dataset.preset
        this.deleteCustomPreset(presetId)
        return
      }
      
      if (e.target.closet('.preset-btn')) {
        const presetKey = e.target.closest('.preset-btn').dataset.preset
        await this.loadPreset(presetKey)
        return
      
      }
    })
    
    document.addEventListener('input', async (e) => {

    })

    if (this.ui.themeToggle) {
      this.ui.themeToggle.addEventListener('click', () => {
        this.ui.toggleTheme()
      })
    }
  }

  loadAllSounds() {
    sounds.forEach((sound) => {
      const audioUrl = `sounds/${sound.file}`
      const success = this.soundManager.loadSound(sound.id, audioUrl)

      if (!success) {
        console.warn(`Could not load sound: ${sound.name} from ${audioUrl}`)
      }
    })
  }
  
  async toggleSound(soundId) {
    const audio = this.soundManager.audioElements.get(soundId)

    if (!audio) {
      console.error(`Sound ${soundId} not found`)
      return false
    }

    if (audio.paused) {
      const card = document.querySelector(`[data-sound="${soundId}]`)
      const slider = card.querySelector('.volume-slider')
      let volume = parseInt(sliderValue)
    
      if (volume === 0) {
        volume = 50
        this.ui.updateVolumeDisplay(soundId.volume)
      }

      this.currentSoundState[soundId] = volume
      this.soundManager.setVolume(soundId.volume)
      await this.soundManager.playSound(soundId)
      this.ui.updateSoundPlayButton(soundId, true)
    }
  }

  toggleAllSounds() {

  }

  setSoundVolume(soundId, volume) {
    this.currentSoundState[soundId] = volume
  }
  
  setMasterVolume(volume) {
    this.masterVolume = volume
  }

  applyMasterVolumeToAll() {}
  updateMainPlayButtonState() {}
  resetAll() {}

  loadPreset(presetKey, custome = false) {

  }

  showSavePresetModal() {}
  saveCurrentPreset() {}

  loadCustomPresetsUI() {
    const customPresets = this.presetManager.customPresets
    for (const [presetId, preset] of Object.entries(customPresets)) {
      this.ui.addCustomPreset(preset.name, presetId)
    }
  }

  deleteCustomPreset(presetId) {}

  onTimerComplete() {} 
}

document.addEventListener('DOMContentLoaded', () => {
  const app = new EchoBinder()
  app.init()
})
