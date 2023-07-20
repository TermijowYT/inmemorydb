import { InMemoryDB } from './inmemorydb.ts';
import { faker } from '@faker-js/faker';

// Crear una instancia de la base de datos
export const db = new InMemoryDB<string>();

const fullvalues = [];
let table = {};
for (let i = 0; i < 10; i++) {
    const id = faker.string.uuid();
    const data = (faker.internet.userName());
    db.insert(id, data);
        table = {
            ...table,
            id:id,
            data:data
        }
    fullvalues.push(id);
}
// const fullvalues = db.getAllIds(id);


// Insertar valores en la base de datos
db.insert('key1', 'pepe');

// Obtener un valor de la base de datos
export const value = db.get('key1');
// console.log(value);

// Obtener todos los valores de la base de datos
export const allValues = db.getAll();
// console.table([...fullvalues, ...allValues]);
console.table([allValues, fullvalues]); 
console.table(table);
// Eliminar un valor de la base de datos
db.delete('key1');

// Borrar todos los datos de la base de datos
db.clear();


// console.table(fullvalues);

// console.table(c)









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



