# E-commerce

This application uses the MVC paradigm in order to create a database and routes for an e-commerce company.

## Walkthrough Video

https://user-images.githubusercontent.com/70774264/134782945-a6274154-3cbb-4294-b0dd-31e0b7e718e8.mp4

## Installation

```
git clone git@github.com:ZachYarbrough/fantastic-umbrella.git
cd fantastic-umbrella
npm i
```
Be sure to create a .env file in the root directory and input:
```
DB_NAME='ecommerce_db'
DB_USER='root' //Your MySQL Username
DB_PW='password' //Your MySQL Password
```

## Usage
```
mysql -u root -p
```
Input password and then input these commands inside the mySQL terminal
```
source db/schema.sql;
quit;
```
```
npm run seeds
npm start
```
