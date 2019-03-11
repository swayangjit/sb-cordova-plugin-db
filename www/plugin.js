var exec = require('cordova/exec');

var PLUGIN_NAME = 'db';

var db = {

    init(dbName, dbVersion, migrations, callback) {
        exec(callback, null, PLUGIN_NAME, "init", [dbName, dbVersion, migrations]);
    },

    open(filePath, callback) {
        exec(callback, null, PLUGIN_NAME, "open", [filePath]);
    },

    close(isExternalDb, callback) {
        exec(callback, null, PLUGIN_NAME, "close", [isExternalDb]);
    },

    copyDatabase(destination,callback) {
        exec(callback, null, PLUGIN_NAME, "copyDatabase", [destination]);
    },

    read(distinct,
         table,
         columns,
         selection,
         selectionArgs,
         groupBy,
         having,
         orderBy,
         limit,
         useExternalDb,
         success,
         error) {

        exec(success, error, PLUGIN_NAME, "read", [distinct,
            table,
            columns,
            selection,
            selectionArgs,
            groupBy,
            having,
            orderBy,
            limit,
            useExternalDb]);
    },

    execute(query,useExternalDb, success, error) {
        exec(success, error, PLUGIN_NAME, "execute", [query, useExternalDb]);
    },

    insert(table, model,useExternalDb, success, error) {
        exec(success, error, PLUGIN_NAME, "insert", [table, model,useExternalDb]);
    },

    update(table, whereClause, whereArgs, model,useExternalDb, success, error) {
        exec(success, error, PLUGIN_NAME, "update", [table, whereClause, whereArgs, model,useExternalDb]);
    },

    delete(table, whereClause, whereArgs, useExternalDb, success, error) {
        exec(success, error, PLUGIN_NAME, "delete", [table, whereClause, whereArgs,useExternalDb]);
    },

    beginTransaction() {
        exec(null, null, PLUGIN_NAME, "beginTransaction", []);
    },

    endTransaction(isOperationSuccessful,useExternalDb) {
        exec(null, null, PLUGIN_NAME, "endTransaction", [isOperationSuccessful,useExternalDb]);
    }

};


module.exports = db;
