import mysql, { Connection } from 'mysql2/promise';

export class DataBase {

  private static instance: DataBase;
  private connection!: Connection;
  

  private constructor() {}

  public static getInstance(): DataBase {
    if(!DataBase.instance) {
      DataBase.instance = new DataBase();
    }

    return DataBase.instance;
  }

  public async connect(): Promise<void> {
    if(!this.connection) {
      this.connection  = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'tddnode',
        password: 'academyjava',
        port: 3306
      })
    }
  }

  public getConnection(): Connection {
    return this.connection;
  }

}