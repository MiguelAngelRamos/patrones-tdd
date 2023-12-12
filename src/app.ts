// import { DataBase } from "./database/DataBase";

// (async () => {
//   const db = DataBase.getInstance(); //* const "db" se guarda la instancia
//   await db.connect();
//   const connection = db.getConnection();

//   //* las peticiones hacia la base de datos pueden
//   //* pueden generar exception.
//   try {
//    const [rows, fields] = await connection.execute("SELECT * FROM students");
//    //* rows son las filas (imprimir)
//    console.log(rows);
//    //* imprime los metadatos
//    console.log('Fields', fields);
//   } catch(error) {
//     console.error("Error al ejecutar la consulta: ", error);
//   } finally {
//     //* Es una buena práctica cerrar la conexión cuando ya no la necesitamos
//     await connection.end();
//   }
// })();








import { Singleton } from "./singleton/singleton";

 const instancia1 = Singleton.getInstance();
 const instancia2 = Singleton.getInstance();
 const instancia3 = Singleton.getInstance();

console.log(instancia1 === instancia2);
console.log(instancia1 === instancia3);
console.log(instancia2 === instancia3);