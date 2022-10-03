const { Pool, Client } = require('pg');
require('dotenv').config();

const connectDb = async ()=>{
    try {
        const client = new Client({
            user: process.env.PGUSER,
            host: process.env.PGHOST,
            database: process.env.PGDATABASE,
            password: process.env.PGPASSWORD,
            port: process.env.PGPORT
        });
    await client.connect()  ;
    const res = await client.query('SELECT * FROM Customer')
    console.log(res);
    await client.end();
    } catch(error){
        console.log(error);
    }
}

module.exports = connectDb;

const credentials = {
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT
}

const pool = new Pool(credentials);

module.exports = pool;