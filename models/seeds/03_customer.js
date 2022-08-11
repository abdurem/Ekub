/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('customer').del()
  await knex('customer').insert([
    {fullName: 'Murad Abduselam',userId: 2,houseNo:'ET0011',woreda:7,subCity:'Kolfe',city:'Addis Ababa',status:true},
    {fullName: 'Kemal Abdusemed',userId: 3,houseNo:'ET0012',woreda:8,subCity:'Arada',city:'Addis Ababa',status:false},
  ]);
};
