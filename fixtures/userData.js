const faker = require("faker");

function generateUserData() {
  return {
    username: faker.internet.userName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber("+370#########"),
    password: faker.internet.password(),
  };
}

function generateUserDataWithoutEmail() {
  return {
    username: faker.internet.userName(),
    phone: faker.phone.phoneNumber("+370#########"),
    password: faker.internet.password(),
  };
}

function generateUserDataWithoutPass() {
  return {
    username: faker.internet.userName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber("+370#########"),
  };
}

function generateUserDataWithInvalidEmail() {
  return {
    username: faker.internet.userName(),
    email: 1235678,
    phone: faker.phone.phoneNumber("+370#########"),
    password: faker.internet.password(),
  };
}

function MockUserData() {
  return {
    username: "nexchange_user321323",
    email: "user@email.address3215",
    password: "your_desired_password",
  };
}

module.exports = {
  generateUserData,
  MockUserData,
  generateUserDataWithoutEmail,
  generateUserDataWithoutPass,
  generateUserDataWithInvalidEmail
};
