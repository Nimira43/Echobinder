export class UI {
  constructor() {
    this.soundCardsContainer = null
    this.masterVolumeSlider = null
    this.masterVolumeValue = null
    this.playPauseButton = null
    this.resetButton = null
    this.modal = null
    this.customePresetsContainer = null
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
    this.customePresetsContainer = document.getElementById('customPresets')
    this.timerDisplay = document.getElementById('timerDisplay')
    this.timerSelect = document.getElementById('timerSelect')
    this.themeToggle = document.getElementById('themeToggle')
  }

  createSoundCard() {



{/* <div class="flex flex-col h-full">
  <div class="flex items-center justify-between mb-4">
    <div class="flex items-center space-x-3">
      <div class="sound-icon-wrapper w-12 h-12 rounded-md text-red-500 bg-yellow-100 flex items-center justify-center">
        <i class="fa-regular fa-sun"></i>
      </div>
      <div>
        <h3 class="font-medium text-lg">Sound Name</h3>
        <p class="text-xs">Sound Description</p>
      </div>
    </div>
    <button
    type="button"
    class="play-btn w-10 h-10 text-red-500 bg-yellow-100 hover:bg-yellow-200 px-6 py-4 rounded-md hover-transition flex items-center justify-center"
    data-sound="data-sound"
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
        data-sound="data-sound"
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
</div> */}



  }

  createCustomPresetButton() {}

  renderSoundCards() {}

  updateSoundPlayButton () {}

  updateVolumeDisplay() {}

  updateMainPlayButton() {}

  resetUI() {}

  showModal() {}

  hideModal() {}

  addCustomPreset() {}

  setActivePreset() {}

  removeCustomPreset() {}

  updateTimerDisplay() {}

  toggleTheme() {}
}