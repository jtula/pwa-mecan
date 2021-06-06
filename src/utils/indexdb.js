//credits to: https://js.plainenglish.io/working-with-indexeddb-in-typescript-react-ad504a1bdae3
import { openDB } from "idb";
import { DATABASE } from "src/constants";

class IndexedDb {
  constructor(database) {
    this.database = database;
  }

  async createObjectStore(tableNames) {
    try {
      this.db = await openDB(this.database, 1, {
        upgrade(db) {
          tableNames.forEach((table) => {
            if (!db.objectStoreNames.contains(table.name)) {
              if (table.autoIncrement) {
                db.createObjectStore(table.name, {
                  autoIncrement: true,
                  keyPath: "id",
                });
              } else {
                const store = db.createObjectStore(table.name, {
                  keyPath: ["createdAt", "user"],
                });
                store.createIndex("by_createdAt", ["createdAt", "user"], {
                  unique: true,
                });
              }
            }
          });
        },
      });
    } catch (error) {
      return false;
    }
  }

  async getValue(tableName, id) {
    const tx = this.db.transaction(tableName, "readonly");
    const store = tx.objectStore(tableName);
    const result = await store.get(id);
    return result;
  }

  async getValueFromIndex(tableName, indexName = "createdAt", date) {
    const result = await this.db.getFromIndex(tableName, indexName, date);
    return result;
  }

  async getAllValue(tableName) {
    const tx = this.db.transaction(tableName, "readonly");
    const store = tx.objectStore(tableName);
    const result = await store.getAll();
    return result || [];
  }

  async putValue(tableName, value) {
    const tx = this.db.transaction(tableName, "readwrite");
    const store = tx.objectStore(tableName);
    const result = await store.put(value);
    return result;
  }

  async putBulkValue(tableName, values) {
    const tx = this.db.transaction(tableName, "readwrite");
    const store = tx.objectStore(tableName);
    for (const value of values) {
      await store.put(value);
    }
    return this.getAllValue(tableName);
  }

  async deleteValue(tableName, id) {
    const tx = this.db.transaction(tableName, "readwrite");
    const store = tx.objectStore(tableName);
    const result = await store.get(id);
    if (!result) {
      return result;
    }
    await store.delete(id);
    return id;
  }
}

const indexedDb = new IndexedDb(DATABASE);

export default indexedDb;
