# Thanks for helping!

This is a sample application written to hopefully demo a problem with sequelize 
(or node-mssql (or tedious, I'm not sure.))

In it, I try to insert a record into the users table with the networth
 column beign `123456789.123456`, but the database, somehow, gets something else.

## To run this:

`npm install`

Create a database on your SQL Server called `sequelize-float`

Configure the database connection using the constants at the top of `app.js`

`npm start`

`curl localhost:3000`

Check the users table and verify the networth value.

A colegue and I both get `11186.78219` out of it.

 
