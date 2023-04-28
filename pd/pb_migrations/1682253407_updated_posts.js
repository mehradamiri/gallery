migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6qjombw1b6cazdn")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "b14axye0",
    "name": "description",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6qjombw1b6cazdn")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "b14axye0",
    "name": "description",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
