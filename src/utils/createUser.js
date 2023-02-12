import { faker } from '@faker-js/faker/locale/cz';

/**
 * @returns {import('@/types').User}
 */
export function createUser() {
  const id = faker.datatype.uuid();
  const sexType = faker.name.sexType();
  const firstName = faker.name.firstName(sexType);
  const lastName = faker.name.lastName(sexType);
  const avatar = faker.image.avatar();

  return {
    id,
    firstName,
    lastName,
    avatar
  };
}

/**
 * @param {number} [count]
 * @returns {import('@/types').User[]}
 */
export function createUsers(count = +import.meta.env.VITE_USERS_COUNT) {
  return Array.from({ length: count }, createUser);
}