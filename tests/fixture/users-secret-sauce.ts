export const users: Users = {
  standardUser: {
    username: "standart_user",
    password: "password",
  },
  errorUser: {
    username: "standart_user",
    password: "password",
  },
  problemUser: {
    username: "standart_user",
    password: "password",
  },
};

type User = {
  username: string;
  password: string;
};

export type Users = {
  standardUser?: User; //створити об'єкт Users
  lockedUser?: User;
  problemUser?: User;
  performanceGlitchUser?: User;
  errorUser?: User;
  visualUser?: User;
  currentUser?: User;
};
