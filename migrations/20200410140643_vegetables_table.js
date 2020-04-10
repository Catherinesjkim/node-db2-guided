//? Concept that matters
// migrations
// "up" describes the changes that will be applied to the db
exports.up = function(knex) {
  // create a vegetables table
  return knex.schema.createTable('vegetables', tbl => { // remember to "return" the call to knex.schema
    // a primary key, named id, type integer, autoincrement
    tbl.increments(); // method from knex

    tbl
      .string('name', 255) // chainable
      .notNullable() // chainable
      .unique() // chainable
      .index(); // chainable

    tbl.boolean('favorite').defaultTo(false); // 0 in db - chainable
  });
};

// "down" describes how to undo the changes from the up function
exports.down = function(knex) { // undo = cmmd + z for the table structure
  // remove (drop) the vegetables table 
  return knex.schema.dropTableIfExists('vegetables')
};
