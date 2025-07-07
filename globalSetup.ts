import { request, type FullConfig } from "@playwright/test";
import { UserController } from "./app/api/UserController/UserController";
import { defaultUserData } from "./tests/fixture/userData";
import { saveToFile } from "./utils/file-utils";

async function globalSetup(config: FullConfig) {
  const context = await request.newContext();

  const userController = new UserController(context);
  const isUserExist = await userController.checkIfUserExist({
    email: defaultUserData.email,
    password: defaultUserData.password,
  });

  let token;

  if (!isUserExist) {
    const response = await userController.createUser(defaultUserData);
    token = await userController.getTokenFromResponse(response);
  } else {
    const response = await userController.login({
      email: defaultUserData.email,
      password: defaultUserData.password,
    });

    token = await userController.getTokenFromResponse(response);
  }

  saveToFile(`.auth/${defaultUserData.email}.json`, token!);
}

export default globalSetup;
