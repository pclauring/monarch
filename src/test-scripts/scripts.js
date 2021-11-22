//Sample data
const monster = {
  name: 'Egg',
  level: 0,
  ownerId: 'user_id',
  species: 'GUID',
  spriteURL: 'GUID.png',
  lifeEvents: [
    { type: 'Hatch', timeStamp: new Date() },
    { type: 'Death', timeStamp: new Date() },
  ],
};
console.log(JSON.stringify(monster));
