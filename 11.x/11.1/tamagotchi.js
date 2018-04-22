class DigitalPal {

    // constructor(hungry, sleepy, bored, age){
    constructor(){
        this.hungry = false;
        this.sleepy = false;
        this.bored  = true;
        this.age    = 0;
    }

    feed(){
        if ( this.hungry === true ) {
            console.log(`That was yummy!`);
            this.hungry = false;
            this.sleepy = true;
        } else {
            console.log(`No thanks! I'm full.`);
        }
    }

    sleep() {
        if ( this.sleepy === true ) {
            console.log(`Zzzzz`);
            this.sleepy = false;
            this.bored = true;
            this.increaseAge();
        } else {
            console.log(`No way! I'm not tired.`);
        }
    }

    play(){
        if ( this.bored === true ) {
            console.log(`Yay! Let's play!`);
            this.bored = false;
            this.hungry = true;
        } else {
            console.log(`Not right now. Later?`);
        }
    }

    increaseAge(){
        this.age++;
        console.log(`Happy Birthday to me! I am ${this.age} old!`)
    }

//END OF: class DigitalPal {
}