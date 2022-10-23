class Timer {
    constructor(durationInput, startButton, pauseButton) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);

    }

    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time)  {
        this.durationInput.value = time;
    }

    start = () => {
        console.log(this);
        this.tick();
        this.intervalId = setInterval(this.tick, 1000);
    }

    tick = () => { 
        if (this.timeRemaining <= 0 ) {
            this.pause();
        } else {
            this.timeRemaining = this.timeRemaining - 1;
        }
    }

    pause = () => {
        clearInterval(this.intervalId);
    }
}

const durationInput = document.querySelector('#duration');
const startButton =  document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput,startButton, pauseButton);
