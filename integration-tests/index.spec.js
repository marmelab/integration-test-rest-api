import frisby from "frisby";

describe("/ route", () => {
  it("should return 'Hello World!'", () => {
    return frisby
      .get("http://localhost:3000/")
      .expect("status", 200)
      .expect("bodyContains", "Hello World!");
  });
});
