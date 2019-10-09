exports.up = function(knex) {
    return knex.schema.createTable("students", table => {
        table.increments("id")
        table.string("name")
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("students")
}