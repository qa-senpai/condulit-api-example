import { expect } from "@playwright/test";
import * as fs from "fs";
import { test } from "../fixture/api-fixture";
import { UserResponse } from "../../app/api/UserController/UserTypes";

test("create user - should be created", async ({ userController }) => {
  const requestBody = {
    email: "psp123@gm.com",
    password: process.env.CONDULIT_DEFAULT_PASSWORD,
    username: "psp123",
  };

  // Act
  const response = await userController.createUser(requestBody);

  // Assert
  const responseJson: UserResponse = await response.json();
  const token = responseJson.user.token;
  expect(token).toBeTruthy();
});

test("login as existed user - should get token", async ({ userController }) => {
  const requestBody = {
    email: "pspa@gg.com",
    password: "1234",
  };

  // Act
  const response = await userController.login(requestBody);

  // Assert
  const responseJson: UserResponse = await response.json();
  const token = responseJson.user.token;
  expect(token).toBeTruthy();
});

test("login as existed user - should be logged", async ({ request }) => {
  // Arrange

  // Act
  const response = await request.post(
    "https://conduit-api.learnwebdriverio.com/api/users/login",
    {
      data: { user: { email: "pspa@gg.com", password: "1234" } },
    }
  );

  const state = await request.storageState();
  fs.writeFileSync(".auth/logged-user.json", JSON.stringify(state));

  // Assert
  const responseJson: UserResponse = await response.json();
  const token = responseJson.user.token;
  expect(token).toBeTruthy();
});
