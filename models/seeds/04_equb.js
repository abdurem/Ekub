/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('equb').del()
  await knex('equb').insert([
    {type: 'daily',startDate: '2022-1-1', endDate: 100, saving: 100000, depositAmount: 1000, commission: 500000, noOfCustomers: 100, payoutInterval: 1, noOfPayouts: 0},
  ]);
};
