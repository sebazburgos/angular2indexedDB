// ANGULAR 2 INDEXEDDB
// indexedDB with entities in the angular 2 applications using typescript 
// written by roberto simonetti
// MIT license
// https://github.com/robisim74/angular2indexedDB
// ObjectStores class
// define the object stores of db
var ObjectStores = (function () {
    function ObjectStores() {
    }
    // create object stores
    ObjectStores.prototype.createStores = function (db) {
        /**
         * object store
         *
         * key               value
         *
         * record1
         * record2
         * ...
         */
        // EXAMPLE TODO
        // create todo store
        var todoStore = db.createObjectStore("todoStore", { keyPath: 'todoId' });
        // add new stores here
    };
    return ObjectStores;
})();
exports.ObjectStores = ObjectStores;