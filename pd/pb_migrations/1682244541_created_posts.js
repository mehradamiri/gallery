migrate((db) => {
  const collection = new Collection({
    "id": "6qjombw1b6cazdn",
    "created": "2023-04-23 10:09:01.802Z",
    "updated": "2023-04-23 10:09:01.802Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ff41xxua",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
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
      },
      {
        "system": false,
        "id": "x2ggtbjp",
        "name": "art",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": []
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("6qjombw1b6cazdn");

  return dao.deleteCollection(collection);
})
