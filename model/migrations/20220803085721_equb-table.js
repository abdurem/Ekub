/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('equb',table=>{
        table.increments('id').primary();
        table.string('type');
        table.date('startDate');
        table.integer('endDate');
        table.float('saving');
        table.float('depositAmount');
        table.float('commission');
        table.integer('noOfCustomers');
        table.integer('payoutInterval');
        table.integer('noOfPayouts');
        table.timestamps(true,true);
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('equb');
};
