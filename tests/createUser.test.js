const {
  generateUserData,
  MockUserData,
  generateUserDataWithoutEmail,
  generateUserDataWithoutPass,
  generateUserDataWithInvalidEmail,
} = require("../fixtures/userData");
const { createUser } = require("../helpers/apiHelper");

describe("API tests for user creation", () => {
  let fakeUser,
    mockUserData,
    dataWithoutEmail,
    dataWithoutPass,
    userDataWithInvalidEmail;

  beforeEach(() => {
    fakeUser = generateUserData();
    mockUserData = MockUserData();
    dataWithoutEmail = generateUserDataWithoutEmail();
    dataWithoutPass = generateUserDataWithoutPass();
    userDataWithInvalidEmail = generateUserDataWithInvalidEmail();
  });
  it("creates a user successfully", async () => {
    const response = await createUser(fakeUser);
    expect(response.status).toBe(201);
    expect(response.data).toEqual(
      expect.objectContaining({
        username: fakeUser.username,
        email: fakeUser.email,
        phone: null,
        country: null,
        is_custody: false,
      })
    );
  });

  it("handles non-unique username and email", async () => {
    try {
      const response = await createUser(mockUserData);
      console.log(response);
    } catch (error) {
      expect(error.response.status).toBe(400);
      expect(error.response.data).toEqual({
        username: ["This field must be unique."],
        email: ["This field must be unique."],
      });
    }
  });

  it("check required email in body", async () => {
    try {
      const response = await createUser(dataWithoutEmail);
      console.log(response);
    } catch (error) {
      expect(error.response.status).toBe(400);
      expect(error.response.data).toEqual({
        email: ["This field is required."],
      });
    }
  });

  it("check required password in body", async () => {
    try {
      const response = await createUser(dataWithoutPass);
      console.log(response);
    } catch (error) {
      expect(error.response.status).toBe(400);
      expect(error.response.data).toEqual({
        password: ["This field is required."],
      });
    }
  });

  it("check validation email in body", async () => {
    try {
      const response = await createUser(userDataWithInvalidEmail);
      console.log(response);
    } catch (error) {
      expect(error.response.status).toBe(400);
      expect(error.response.data).toEqual({
        email: ["Enter a valid email address."],
      });
    }
  });
});
