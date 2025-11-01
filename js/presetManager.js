export class PresetManager {
  constructor() {
    this.customPresets = this.loadCustomPresets()
  }

  loadCustomPresets() {}
  loadPreset(PresetId) {}
  saveCustomPresets() {}
  savePreset(name, soundStates) {}
  presetNameExtras(name) {}
  deletePreset(presetId) {}

}