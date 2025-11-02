export class UI {
  constructor() {
    this.soundCardsContainer = null
    this.masterVolumeSlider = null
    this.masterVolumeValue = null
    this.playPauseButton = null
    this.resetButton = null
    this.modal = null
    this.customPresetsContainer = null
    this.timerDisplay = null
    this.timerSelect = null
    this.themeToggle = null
  }

  init() {
    this.soundCardsContainer = document.querySelector('.grid')
    this.masterVolumeSlider = document.getElementById('masterVolume')
    this.masterVolumeValue = document.getElementById('masterVolumeValue')
    this.playPauseButton = document.getElementById('playPauseAll')
    this.resetButton = document.getElementById('resetAll')
    this.modal = document.getElementById('savePresetModal')
    this.customPresetsContainer = document.getElementById('customPresets')
    this.timerDisplay = document.getElementById('timerDisplay')
    this.timerSelect = document.getElementById('timerSelect')
    this.themeToggle = document.getElementById('themeToggle')
  }

  createSoundCard(sound) {
    const card = document.createElement('div')
    card.className = 'sound-card bg-yellow-100 rounded-2xl p-6 relative overflow-hidden'
    card.dataset.sound = sound.id

    card.innerHTML = `
      <div class="flex flex-col h-full">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center space-x-3">
            <div class="sound-icon-wrapper w-12 h-12 rounded-md text-red-500 bg-yellow-100 flex items-center justify-center">
              <i class="fa-solid ${sound-icon}"></i>
            </div>
            <div>
              <h3 class="font-medium text-lg">${sound.name}</h3>
              <p class="text-xs">${sound.description}</p>
            </div>
          </div>
          <button
          type="button"
          class="play-btn w-10 h-10 text-red-500 bg-yellow-100 hover:bg-yellow-200 px-6 py-4 rounded-md hover-transition flex items-center justify-center"
          data-sound="${sound-id}"
        >
          <i class="fa-regular fa-circle-play text-sm"></i>
        </button>
        </div>
        <div class="flex-1 flex flex-col justify-center">
          <div class="flex items-center space-x-3">
            <i class="fa-solid fa-volume-low opacity-50"></i>
            <input 
              type="range"
              min="0"
              max="100"
              value="0"
              class="volume-slider flex-1"
              data-sound="${sound.id}"
            >
            <span class="volume-value text-sm w-8 right-right">0</span>
          </div>
          <div class="volume-bar mt-3">
            <div 
              class="volume-bar-fill"
              style="width: 0%"
            ></div>
          </div>
        </div>
      </div>
    `
    return card
  }

  createCustomPresetButton(name, presetId) {
    const button = document.createElement('button')
    button.className = 'custom-preset-btn bg-yellow-100 bg-yellow-200 px-4 py-2 rounded-md hover-transition relative group'
    button.dataset.preset = presetId
    button.innerHTML = `
      <i class="fa-solid fa-star mr-2 text-red-500"></i>
      ${name}
      <button
        type="button"
        id="resetAll"
        class="delete-preset abosulte -top-2 -right-2  w-6 h-6 bg-red-500 rounded-md opacity-0 group-hover:opacity-100 hover-transition"
        data-preset="${presetId}"
      >
        <i class="fa-regular fa-circle-xmark text-xs text-red-white"></i>
        
      </button>
    `
    return button
  }

  renderSoundCards(sounds) {
    this.soundCardsContainer.innerHTML = ''
    sounds.forEach((sound) => {
      const card = this.createSoundCard(sound)
      this.soundCardsContainer.appendChild(card)
    })
  }

  updateSoundPlayButton () {}

  updateVolumeDisplay(soundId, volume) {
    const card = document.querySelector(`[data-sound="${soundId}"]`)

    if (card) {
      const volumeValue = card.querySelector('.volume-value')
      if (volumeValue) {
        volumeValue.textContent = volume
      }
    }
  }

  updateMainPlayButton() {}

  resetUI() {}

  showModal() {}

  hideModal() {}

  addCustomPreset(name, presetId) {
    const button = this.createCustomPresetButton(name, presetId)
    this.customPresetsContainer.appendChild(button)
  }

  setActivePreset() {}

  removeCustomPreset() {}

  updateTimerDisplay() {}

  toggleTheme() {
    const body = document.body
    const icon = this.themeToggle.querySelector('i')

    if (body.classList.contains('light-theme')) {
      body.classList.remove('light-theme')
      icon.classList.replace('fa-moon', 'fa-sun')
    } else {
      body.classList.add('light-theme')
      icon.classList.replace('fa-sun', 'fa-moon')
    }
  }
}