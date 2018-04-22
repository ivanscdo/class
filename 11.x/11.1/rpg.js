function Character(name, job, gender, age, str, hp) {
    this.name   = name;
    this.job    = job;
    this.gender = gender;
    this.age    = age;
    this.str    = str; 
    this.hp     = hp;
    this.printStats = function () {
        console.log(` 
        Name:       ${this.name}
        Profession: ${this.job}
        Gender:     ${this.gender}
        Age:        ${this.age}
        Strength:   ${this.str}
        HP:         ${this.hp}
        `);
    this.isAlive = function () {

    };
    }
}

let chivo = new Character("Chivo", "Thief", "Male", "Unknown", 80, 1000);
let cecil = new Character("Cecil", "Dark Knight", "Male", 29, 20, 349);

chivo.printStats();
cecil.printStats();
