/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('employee',table=>{
    table.increments('id').primary();
    table.string('fullName');
    table.integer('userId').unsigned();
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
    return knex.schema.dropTable('employee');
};
