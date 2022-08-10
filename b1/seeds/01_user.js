/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user').del()
  await knex('user').insert([
    {phone: '0911122334',type: 'employee', password: '12345' },
    {phone: '0911112233',type: 'customer', password: '23456' },
    {phone: '0999887766',type: 'customer', password: '34567' },
    {phone: '0988776655',type: 'employee', password: '45678' }
  ]);
};
