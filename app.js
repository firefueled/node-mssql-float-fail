const http = require('http');
const sql = require('mssql')
const { Sequelize, DataTypes } = require('sequelize');

const hostname = '127.0.0.1';
const port = 3000;

const DB_HOST = 'localhost'
const DB_DATABASE = 'sequelize-float'
const DB_USER = 'sa'
const DB_PASS = 'sa'
const float_value = 123456798.123456

const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASS, {
    host: DB_HOST,
    dialect: 'mssql',
    // none of these seem to help
    // dialectOptions: {
    //     supportBigNumbers: true,
    //     bigNumberStrings: true
    // },
});

const User = sequelize.define('User', {
    networth: {
        type: DataTypes.FLOAT,
        // type: DataTypes.FLOAT(20, 5),
        // type: DataTypes.DECIMAL(20, 5),
        // type: DataTypes.DOUBLE,
    },
}, {
    timestamps: false
});


// curl to test this insert:
// curl localhost:3000
const server = http.createServer(async (req, res) => {
    // try {
    //     const pool = await sql.connect(`mssql://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_DATABASE}`)
    //     await pool.request()
    //         .input('networth', sql.Float, float_value)
    //         .query(`insert into users (networth) values (@networth)`)
    // } catch (err) {
    //     console.error(err)
    // }

    await User.create({ networth: Number(float_value) })

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, async () => {
    console.log(`Server running at http://${hostname}:${port}/`);

    await sequelize.authenticate();
    await sequelize.sync({ force: true });
});