import TeamV2 from './TeamV2';

const testTeam = new TeamV2('HollowV2');
const generator = testTeam[Symbol.iterator]();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

for (const iterator of testTeam) {
  console.log(iterator);
}
