import { InMemoryDB } from './inmemorydb.ts';
import { faker } from '@faker-js/faker';

// Crear una instancia de la base de datos
export const db = new InMemoryDB<string>;


for (let i = 0; i < 2; i++) {
    const id = faker.string.uuid();
    const data = (faker.internet.userName()).toString();
    db.insert(id, data);
    const fullvalues = db.getAllIds(id);
    console.table(fullvalues);
}
// Insertar valores en la base de datos
db.insert('key1', 'Pepepepepe');
// db.insert('key2', 456);

// Obtener un valor de la base de datos
export const value = db.get('key1');
console.log(value); // Salida: 123

// Obtener todos los valores de la base de datos
export const allValues = db.getAll();
console.table(allValues); // Salida: [123, 456]

// Eliminar un valor de la base de datos
db.delete('key1');

// Borrar todos los datos de la base de datos
db.clear();















// export function createRandomUser() {
//     return {
//       userId: faker.string.uuid(),
//       username: faker.internet.userName(),
//       email: faker.internet.email(),
//       avatar: faker.image.avatar(),
//       password: faker.internet.password(),
//       birthdate: faker.date.birthdate(),
//       registeredAt: faker.date.past(),
//     };
//   }

// console.log(createRandomUser())



