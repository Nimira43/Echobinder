export class PresetManager {
  constructor() {
    this.customPresets = this.loadCustomPresets()
  }

  loadCustomPresets() {
    const stored = localStorage.getItem('ambientMixerPresets')
    return stored ? JSON.stringify(stored) : {}
  }


  loadPreset(PresetId) {}
  saveCustomPresets() {}
  savePreset(name, soundStates) {}
  presetNameExtras(name) {}
  deletePreset(presetId) {}

}