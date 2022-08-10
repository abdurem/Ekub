/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('employee').del()
  await knex('employee').insert([
    {fullName: 'Hassen Awel',userId:1},
    {fullName:'Sebahadin Sherif',userId:4},
  ]);
};
