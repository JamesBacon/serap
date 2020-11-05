# serapi

A NodeJS Module for interacting with the Space Engineers Remote API.

## Installation
```bash
npm i serap
```
This Module uses built-in Node Modules. (http, crypto, Buffer)

## Usage
Require the Module and set up your options.
```javascript
const serap = require("serap");

const options = {
  ip: "127.0.0.1",
  port: 8080,
  secret: "Your Secret"
};

serap.credentials(options);
```
Now you can use all the endPoints like so:
```javascript
serap.server().then(res => {
  console.log(res)
});
```
A full list of Endpoints can be found below.

## Endpoints
All endPoints are GET only. Some do have POST, DELETE and PATCH available, but they have not been added to this Module yet.

`.players()` - `"/v1/session/players"`

`.asteroids()` - `"/v1/session/asteroids"`

`.grids()` - `"/v1/session/grids"`

`.floatingObjects()` - `"/v1/session/floatingObjects"`

`.planets()` - `"/v1/session/planets"`

`.chat()` - `"/v1/session/chat"`

`.server()` - `"/v1/server"`

`.ping()` - `"/v1/server/ping"`

`.bannedPlayers()` - `"/v1/admin/bannedPlayers"`

`.kickedPlayers()` - `"/v1/admin/kickedPlayers"`
