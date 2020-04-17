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

## Config
### Update the server uri
Update this `uri: "http://localhost:4000"` value in the `/client/src/index.js` file depending on where your server is being hosted


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



# Reflections

### REFLECTIONS

---
**DECISIONS MADE:**

- Base architecture on example Apollo Server + Client Demo.
- Go with some technologies I know, such as PostgreSQL and Sequeilze.
- Also try some I do not, like the Google Materialize React Component Library

**THINGS I LEARNED:**

- how schemas and resolvers and all that are connected
- how to use hooks  with url params
- Just smarter ways to use hooks since the Apollo API is so hook based

**CHALLENGES?**

- how to connect Sequelize and apollo
- just deciding on the overall architecture tbh
- standardizing returning error messages
- looks like I don't need two separate endpoints / queries for getting links

**BLOCKERS?**

- just initial understanding of how everything fit together

**COULD NOT GET AROUND TO:**

- made the uri in client connect to more flexible, take a look at process.env for info
- made the sequelize connection not hardcoded and also based on env variables
- any form of client side caching
- pagination
- clearing the search form after user submits
- client side validation for URL
- server side validation for URL
- Get 'no results found' to properly display