# NotePad MERN

A simple note-taking application that perform CRUD actions and it is developed by MERN stack.

The following frameworks are used to build this application.

```
MongoDB
Express
React@16.8
Node
Redux
```

## React@16.8

Introducing **useState**, it is a hook that allow us to have a state variable in functional component. But it allows us to only declare one state variable at a time.

When declaring a state, we can write for eg.

```
import React, { useState } from 'react';

const [isOn, setOn] = useState(0);

console.log(ísOn); // 0

```

## Redux

Redux as a state management and the directory structure as below:

```

├── src
│   ├── store.js // create a store for the state of components
│   ├── actions
│   │   ├── noteActions.js  // user perform CRUD actions on the Note component
│   │   └── types.js
│   ├── reducers
│   │   ├── noteReducer.js // return the updated state to the Note component
│   │   └── rootReducer.js

```

## Installation 

Install [mongoDB](https://www.mongodb.com/try/download/community) and [node](https://nodejs.org/en/).

The following steps are required to install packages for both client and server:

1. Install the packages for the server.

```bash
npm install
```

2. Install the packages for the client.

```bash
npm client-install
```

## Usage

Run the NotePad

```bash
# the react app will run on port 3000
npm run dev
```

It will redirect you to http://localhost:3000/ 

Writing a note in the textfield and hit the add button! The note will then be saved in the notepad-app db.

## Testing

A script is configured named **test** for running Jest.

```bash
npm run test
```