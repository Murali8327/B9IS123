const db = new Dexie('myDB');
db.version(1).stores({
    friends: '++id, name, age' // Fixed schema definition
});

// Open database
db.open().catch(err => {
    console.error("Failed to open DB:", err);
});

// Add data to test if it works
db.friends.put({ name: 'John', age: 25 }).then(() => {
    console.log("Data added successfully!");
});