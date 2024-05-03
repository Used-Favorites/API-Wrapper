import { faker } from "@faker-js/faker";

export const randomName = faker.person.fullName();
export const randomEmail = faker.internet.email();
export const randomLocation = {
  latitude: faker.location.latitude(),
  longitude: faker.location.longitude(),
  city: faker.location.city(),
  country: faker.location.country(),
  state: faker.location.state(),
  street: faker.location.street(),
  timezone: faker.location.nearbyGPSCoordinate(),
  zip: faker.location.zipCode(),
};

export const randomProduct = {
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
  description: faker.commerce.productDescription(),
  material: faker.commerce.productMaterial(),
  type: faker.commerce.department(),
  category: faker.commerce.isbn(),
};
