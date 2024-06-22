class SuperHero {
  constructor(name, outfit, powers, weaknesses, foes, lifeLevel) {
    this.name = name;
    this.outfit = outfit;
    this.powers = powers;
    this.weaknesses = weaknesses;
    this.foes = foes;
    this.lifeLevel = lifeLevel;
  }

  useSuperpower(superPowerName) {
    if (superPowerName == "fly") {
      console.log("he is flying");
    }
    console.log("use my superpower");
  }

  savePeople() {
    console.log("user");
  }

  fight() {
    console.log("fighting ");
  }

  loseLifeLevel() {
    console.log("losing some life");
  }
}
