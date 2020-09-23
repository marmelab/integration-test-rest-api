import { getUserById } from "./users.js";

describe("Users", () => {
  describe("getUserById", () => {
    it("should return the right users", () => {
      expect(getUserById(1)).toMatchObject({ id: 1, name: "Leanne Graham" });
    });

    it("should return null when users doesn't exist", () => {
      expect(getUserById(999)).toBeNull();
    });
  });
});
