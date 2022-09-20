/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex('admin').del()
    await knex('admin').insert([
      {username: 'faisel', password: '0000' },
      {username: 'mudesir', password: '0000' },
      {username: 'kinan', password: '0000' },
      {username: 'abdurehman', password: '0000' }
    ]);
  };
  