// MongoDB Playground Script for GachaWorld

// Declare constants for database and collection names.
// This makes it easier to change the names later if needed.
const databaseName = 'gachaworld';
const collectionName = 'gachapon';

// Set the current database to 'gachaworld'.
// This is equivalent to running `use gachaworld` in the MongoDB shell.
// All subsequent operations will be performed on this database.
use(databaseName);

// Create a new collection named 'gachapon'.
// This is where you'll store data related to the gachapon toys in your game.
// If the collection already exists, this operation is a no-op.
db.createCollection(collectionName);

// The above `createCollection` command can also accept additional parameters
// to customize the behavior of the collection. These are commented out below
// for reference. For example, you can set validation rules, specify whether
// the collection is capped, etc.

/* 
db.createCollection(collectionName, {
  capped: false,  // Whether the collection is capped (fixed size)
  size: 5242880,  // Max size in bytes for a capped collection
  max: 5000,      // Max number of documents for a capped collection
  validator: { $jsonSchema: { /* schema object */   // Validation rules
  // ... other options ... 

// For more information on the `createCollection` command and its options,
// you can refer to the MongoDB documentation:
// https://docs.mongodb.com/manual/reference/method/db.createCollection/
