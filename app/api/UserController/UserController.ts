import { APIRequestContext, APIResponse, expect } from "@playwright/test";
import { User, UserRequest, UserResponse } from "./UserTypes";
import { BaseApiController } from "../BaseController";

export class UserController extends BaseApiController {
  async login(userData: { email: string; password: string }) {
    const response = await this.request.post("/api/users/login", {
      data: { user: userData },
    });

    return response;
  }

  async checkIfUserExist(userData: { email: string; password: string }) {
    const response = await this.login(userData);

    if (response.ok()) {
      return true;
    } else return false;
  }

  async createUser(userData: User) {
    const body: UserRequest = {
      user: userData,
    };

    const response = await this.request.post("/api/users", {
      data: body,
      failOnStatusCode: true,
    });

    return response;
  }

  async getTokenFromResponse(response: APIResponse) {
    const responseJson: UserResponse = await response.json();
    const token = responseJson.user.token;
    expect(token).toBeTruthy();

    return token;
  }
}
