const mysql = require('mysql2/promise');

let CON = null;
export default class Model  {


    async getConnection(){
        if(CON==null){
           CON = await mysql.createConnection({host:'localhost', user: 'root', database: 'moc'});
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