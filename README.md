# How we start it


## Core functionality:

- [x]  Display a list of links
- [x]  Search the list of links
- [x]  User can create new links
- [x]  Realtime update when a new links are created

## How to build and run 🚀

### 1. Building (Install all packages)
Type `npm install` in the root directly of the repository. This will install all node package in your `/client` and `/server` applications.

### 2. Running (Start up the client and the server)
Type `npm start` in the root directly of the repository. This will install all node package in your `/client` and `/server` applications.

### 3. Create a new Postgres db that you will use in `/server/src/uitls`. 

Replace `"postgresql://localhost/DB_NAME"` on line 5
```
...
  module.exports.createStore = async () => {
    const sequelize = new Sequelize("postgresql://localhost/DB_NAME");

    const Link = sequelize.define("link", {
      ...
```

with your database name.

-------


### Server Specific Development

`
  cd server
  npm start
` 


### Client Specific Development
`
  cd client
  npm start
` 

