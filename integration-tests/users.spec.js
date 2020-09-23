import frisby from "frisby";
const Joi = frisby.Joi; // Frisby exposes Joi for convenience

const address = Joi.object({
  street: Joi.string().required(),
  suite: Joi.string().required(),
  city: Joi.string().required(),
  zipcode: Joi.string().required(),
  geo: {
    lat: Joi.string().required(),
    lng: Joi.string().required(),
  },
});

const company = Joi.object({
  name: Joi.string(),
  catchPhrase: Joi.string(),
  bs: Joi.string(),
});

const user = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required(),
  username: Joi.string().required(),
  email: Joi.string().email(),
  phone: Joi.string().required(),
  website: Joi.string().uri({ allowRelative: true }).required(),
  address,
  company,
});

describe("/users routes", () => {
  describe("GET /", () => {
    it("should return valid users list", function () {
      return frisby
        .get("http://localhost:3000/users")
        .expect("status", 200)
        .expect("jsonTypesStrict", "*", user);
    });
  });

  describe("GET /:id", () => {
    it("should return valid user", function () {
      return frisby
        .get("http://localhost:3000/users/1")
        .expect("status", 200)
        .expect("jsonTypesStrict", user);
    });

    it("should return 404 if user doesn't exist", function () {
      return frisby
        .get("http://localhost:3000/users/999")
        .expect("status", 404)
        .expect("bodyContains", "Not found");
    });
  });
});
