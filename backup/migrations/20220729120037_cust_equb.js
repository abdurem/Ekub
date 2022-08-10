/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('custEqub',table=>{
    table.increments();
    table.integer('custId').unsigned();
    table.integer('equbId').unsigned();
    table.integer('remaining days');
    table.timestamps(true,true);

    //foreign key
    table.foreign('custId').references('id').inTable('customer');
    table.foreign('equbId').references('id').inTable('equb');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
 return knex.schema.dropTable('custEqub');
};
