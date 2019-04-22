# Veratrak

## Install
After cloning repository install dependecies by running `npm istall`.
If you have not installed in global packages nest, typeorm and ts-node please install.

## Run
Database type is *sqlite* and you will find db under database folder.
By default server will bootstrap running a migration to seed the Database running a migration that reflects the content of `data.sql`, to disable this change the following lines in **ormconfig.json** file.

```js
  //...
  "migrationsRun": false,
  //...
```

If you opt to use .sql file please call the database __*db*__ and put it under database folder.

To run the application you can initialize the database by running *data.sql* file in the root of the project or `npm run mig:run`.

Then, to start te application server run `npm start`.

## API
Once server is started you can go on `http://localhost:3000/api` to see Swagger docs.
