const express = require("express");
const faker = require("faker");
const firstApp = express();
const secondApp = express();
const thirdApp = express();
const portOne = 3000;
const portTwo = 3001;
const portThree = 3002;

firstApp.get("/api/user", (req, res) => {
  res.json(user);
});

secondApp.get("/api/company", (req, res) => {
  res.json(company);
});

thirdApp.get("/api/user/company", (req, res) => {
  res.json({ user, company });
});

const user = {
  _id: faker.datatype.uuid(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  phoneNumber: faker.phone.phoneNumber(),
  email: faker.internet.email(),
  password: faker.internet.password(),
};

const company = {
  _id: faker.datatype.uuid(),
  name: faker.company.companyName(),
  address: {
    street: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.state(),
    zipCode: faker.address.zipCodeByState(),
    country: faker.address.country,
  },
};

firstApp.listen(portOne, () => console.log(`Listening on port: ${portOne}`));
secondApp.listen(portTwo, () => console.log(`Listening on port: ${portTwo}`));
thirdApp.listen(portThree, () => console.log(`Listening on port: ${portThree}`));
