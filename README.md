# MERN CMS

A simple content management system (CMS) developed on MERN Stack.

## Pre-requisites

> Node.js v15.5.1

> npm v7.5.2

> MongoDB v4.4.3

## Steps to set up the project

### 1. Add a `config.env` file in the config folder inside server folder with following details

```
PORT=5000
MONGO_URI=<your_mongoDB_uri>
JWT_SECRET=<your_jwt_secret>
FILE_UPLOAD_PATH=./public/uploads
```

### 2. Install server dependencies

```
cd server
npm install
```

### 3. Install client dependencies

```
cd client
npm install
```

### 4. Run both Express & React

```
cd server
npm start

cd client
npm start
```
