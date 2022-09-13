class Boat {
    constructor(length, beam){
        this.bowToStern = 45;
        this.beam = 12;
    }

    longEnough(){
        return this.bowToStern > 0
    }
    wideEnough(){
        return this.beam > 0
    }
    quote(option){
        const phrases ={
        "bigger": "We're going to need a bigger boat",
        "come_up": "Come up fish. Come to Quint."
    }
    console.log(phrases[option])
}

killJaws(){
    if (this.bowToStern()){
        this.longEnough
        this.quote('come_up')
    }else{
        this.quote('bigger')
    }
}
};

const ORCA = new Boat (65, 12)