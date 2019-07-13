const db = require('../../data/dbConfig')

module.exports = {
    getAll,
    getById,
    getBy,
    remove,
    update,
    add
}

function getAll() {
    return db('animals');
}

function getBy(filter) {
    return db('animals')
    .where(filter)
}

function update(id, change) {
    return db('animals')
    .where({ id })
    .update(change)
    .then( updatedAnimal => updatedAnimal? getById(id) : null)
}

function getById(id) {
    return db('animals')
    .where({id})
    .first()
}

function remove(id) {
    return db('animals')
    .where({id})
    .del();
}

function add(animal) {
    return db('animals')
    .insert(animal, 'id')
    .then (([id]) => getById(id))  
}