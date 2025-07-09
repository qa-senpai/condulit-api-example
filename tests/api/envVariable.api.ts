import { test } from "../fixture/api-fixture";

test("check env variable", async ({ articleController }) => {
  console.log(process.env.WORKERS_COUNT);
  console.log(process.env.BASE_URL);

  console.log(process.env.CONDULIT_DEFAULT_PASSWORD);
  console.log(process.env.OTHER_PASSWORD);
});
