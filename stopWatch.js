export default class StopWatch {
    ms = 0;
    secs = 0;
    mins = 0;
    interval = null;
    msDisplay = document.querySelector('.ms');
    secDisplay = document.querySelector('.secs');
    minsDisplay = document.querySelector('.mins');

    showTimer = () => {
        this.msDisplay.innerText = this.getMs();
        this.secDisplay.innerText = this.getSecs();
        this.minsDisplay.innerText = this.getMins();
    }

    setMins = () => this.mins++;
    setMs = () => this.ms++;
    setSeconds = () => this.secs++;

    resetMins = () => this.mins = 0;
    resetMs = () => this.ms = 0;
    resetSeconds = () => this.secs = 0;

    /**
     * After every 100 ms reset sec
     */
    initialiseSecs() {
        if (this.ms === 100) {
            this.setSeconds();
            this.resetMs();
        }
    }

    initialiseMins() {
        if (this.secs === 60) {
            this.setMins();
            this.resetMs();
        }
    }
    

    getMs() {
        return this.ms;
    }

    getSecs() {
        return this.secs;
    }

    getMins() {
        return this.mins;
    }

    startTimer() {
        this.interval = setInterval(() => {
            this.setMs();
            if (this.ms === 100) {
                this.setSeconds();
                this.resetMs();
            }
            this.showTimer();
        }, 10);
    }

    stopTimer() {
        clearInterval(this.interval);
    }

    resetTimer() {
        clearInterval(this.interval);
        this.resetMs();
        this.resetSeconds();
        this.resetMins();
        this.showTimer();
    }
}
