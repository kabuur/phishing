
const { Pool } =require ("pg")
const client = new Pool({
    host: "127.0.0.1" ,
    database: "frist_user",
    user: "myuser",
    password: "123",
})
module.exports= client