export default class TeamV2 {
  constructor(name) {
    this.name = name;
    this.teamList = new Set([{
      name: 'Zombie',
      type: 'ZombieType',
      health: 50,
      level: 1,
      attack: 40,
      defence: 10,
    }, {
      name: 'Demon',
      type: 'DemonType',
      health: 50,
      level: 1,
      attack: 40,
      defence: 10,
    }, {
      name: 'Undead',
      type: 'UndeadType',
      health: 50,
      level: 1,
      attack: 40,
      defence: 10,
    }]);
  }

  * [Symbol.iterator]() {
    const teamListArray = Array.from(this.teamList);
    for (let i = 0; i < teamListArray.length; i += 1) {
      yield teamListArray[i];
    }
  }
}
