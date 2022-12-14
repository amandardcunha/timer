class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
    
        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    
        if (callbacks) {
            this.onStart =  callbacks.onStart;
            this.onTick =  callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }
    }

    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time)  {
        this.durationInput.value = time.toFixed(2);
    }

    start = () => {
        console.log(this);
        this.tick();
        this.intervalId = setInterval(this.tick, 50);
        if (this.onStart) {
            this.onStart(this.timeRemaining);
        }
    }

    tick = () => { 
        if (this.timeRemaining <= 0 ) {
            this.pause();
            if (this.onComplete) {
                this.onComplete();
            }
        } else {
            this.timeRemaining = this.timeRemaining - 0.05;
            if (this.onTick) {
                this.onTick(this.timeRemaining);
            }
        }
    }

    pause = () => {
        clearInterval(this.intervalId);
    }
}

