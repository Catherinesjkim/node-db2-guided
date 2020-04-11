// async await reads better
exports.seed = async function(knex) {
  const testData = [
    { name: 'tomato', color: 'red' },
    { name: 'squash', color: 'yellow' },
    { name: 'cilantro', color: 'green' },
  ];

  // Truncate deletes ALL existing entries and resets the id back to 1
  // Good for development but never for production - add a SQL file and commands to make changes to the db - using migration is more convenient
  await knex('vegetables').truncate();

  // Inserts seed entries
  return knex('vegetables').insert(testData);
};
