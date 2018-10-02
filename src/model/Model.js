import mysql from 'mysql2/promise';
import DOTENV from 'dotenv'
DOTENV.config();

let CON = null;
export default class Model  {

    async getConnection(){
        if(CON==null){
           CON = await mysql.createConnection({
               host:process.env.DB_HOST, 
               user: process.env.DB_USER, 
               password:process.env.DB_PASS,
               database: process.env.DB});
        }
    }

    async run(query){
       const result =  await CON.execute(query);
       return result;
   
    }
    async getData(table){
        const [rows, fields] = await this.run(`SELECT * FROM ${table}`);
        return rows;
    }
 

}