require('dotenv').config();
const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;

//* 1- Establecer conexión con MongoDB Atlas */
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

//* 2- Crear esquema y modelo */
const personSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String]
});

let Person = mongoose.model('Person', personSchema);

//* 3- Crear un objeto persona a partir del modelo y guardarlo en la base de datos */
const createAndSavePerson = (done) => {
  const person = new Person({
    name: 'Darío Jiménez',
    age: 30,
    favoriteFoods: ['Rice','Vegetables','Onion']
  });

  person.save((err, data) => {
    if (err) return console.error(err);
    done(null , data);
  })
};

//* 4- Crear una lista de personas y guardarla en la base de datos */
const arrayOfPeople = [{ name: 'Jose Arias', age: 26, favoriteFoods: ['Pescado','Frutas','Vegetales'] },
{ name: 'María Contreras', age: 22, favoriteFoods: ['Leche','Frutas'] },
{ name: 'Jorge Cruz', age: 32, favoriteFoods: ['Pollo frito','Jugo de naranja','Embutidos'] }]

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, data) => {
    if (err) return console.log(err);
    done(null , data);
  })
};

//* 5- Buscar a las personas que coinciden con el nombre dado */
const findPeopleByName = (personName, done) => {
  Person.find({ name: personName }, (err, personFound) => {
    if (err) return console.log(err);
    done(null, personFound);
  });
};

//* 6- Buscar un documento basado en la comida dada con Model.findOne() */
//* Util para buscar elementos en base a propiedades especificadas como únicas */
const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: food }, (err, foodFound) => {
    if (err) return console.error(err);
    done(null, foodFound);
  })
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
