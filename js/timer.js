export class Timer {
  constructor(onComplete, onTick) {
    this.duration = 0
    this.remaining = 0
    this.intervalId = null
    this.onComplete = onComplete
    this.onTick = onTick
    this.isRunning = false
  }

  start() {}

  stop() {}

  complete() {
    this.stop()

    if (this.onComplete) this.onComplete()
  }

  updateDisplay() {
    const minutes = Math.floor(this.remaining / 60)
    const seconds = this.remaining % 60

    if (this.onTick) this.onTick(minutes, seconds)
  }
}