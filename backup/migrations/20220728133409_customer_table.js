/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('customer',table=>{
    table.increments('id').primary();
    table.integer('userId').unsigned();
    table.string('fullName');
    table.string('houseNo')
    table.integer('woreda');
    table.string('subCity');
    table.string('city');
    table.boolean('status');
    table.timestamps(true,true);

    //foreign key
    table.foreign('userId').references('id').inTable('user');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('customer');
};
