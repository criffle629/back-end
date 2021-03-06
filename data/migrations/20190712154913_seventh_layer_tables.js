
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('application_admin', tbl => {
        tbl.increments();
        tbl.text('notes')
            .notNullable();
        tbl.integer('application_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('applications')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
        tbl.integer('shelter_user_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('shelter_users')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
        tbl.timestamp('created_at', { precision: 6 })
            .defaultTo(knex.fn.now(6));
    })
    .createTable('application_meta', tbl => {
        tbl.increments();
        tbl.integer('application_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('applications')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
        tbl.string('name', 512)
            .notNullable()
        tbl.string('street_address', 512)
            .notNullable()
        tbl.string('city', 128)
            .notNullable()
        tbl.integer('state_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('states')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
        tbl.string('zip', 128)
            .notNullable()
        tbl.string('home_phone', 128)
            .notNullable()
        tbl.string('email', 256)
            .notNullable()
        tbl.string('cell_phone', 128)
        tbl.boolean('is_over_18')
            .notNullable()
        tbl.boolean('is_homeowner')
            .notNullable()
        tbl.boolean('is_in_agreement')
            .notNullable()
        tbl.boolean('is_homevisit_allowed')
            .notNullable()
        tbl.boolean('is_fenced')
            .notNullable()
        tbl.string('ref_name_1', 512)
            .notNullable()
        tbl.string('ref_phone_1', 128)
            .notNullable()
        tbl.string('ref_relationship_1', 256)
            .notNullable()
        tbl.string('ref_name_2', 512)
            .notNullable()
        tbl.string('ref_phone_2', 128)
            .notNullable()
        tbl.string('ref_relationship_2', 256)
            .notNullable()    
        tbl.boolean('is_declaration')
            .notNullable()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('application_admin')
    .dropTableIfExists('application_meta')
};
