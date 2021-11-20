//Sample data
const monster = {
  name: 'monster',
  level: 1,
  ownerId: 'example_id',
  species: 'bird',
  spriteURL: 'bird.jpeg',
  experiences: [
    {
      name: 'rowing',
      createdDate: new Date('2021-11-19T10:05:44Z'),
      type: 'cardio',
      description: '2x5K',
    },
  ],
};
console.log(JSON.stringify(monster));
