/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('transaction',table=>{
    table.increments();
    table.integer('customerId').unsigned();
    table.integer('employeeId').unsigned();
    table.integer('equbId').unsigned();
    table.timestamp(true);
    table.float('amount');
    table.string('remark');

    //foreign key
    table.foreign('customerId').references('id').inTable('customer');
    table.foreign('employeeId').references('id').inTable('employee');
    table.foreign('equbId').references('id').inTable('equb');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('transaction');
};
