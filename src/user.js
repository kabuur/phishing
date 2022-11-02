const client = require ("./database");

class storeUser{
    constructor(){}
    async create (u, p){
        try{
            const conn = await client.connect();
            const sql = "insert into users (username,password) values($1,$2)";
            const resalts = await conn.query(sql,[u,p]);
            conn.release();
            console.log("entered")
            return resalts.rows;

        }catch(err){
            throw new Error(`something rong ${err}`);
        }

    }
}
// const u = new storeUser()
// console.log(u.create("kabuur","122323232"))

module.exports= storeUser;
