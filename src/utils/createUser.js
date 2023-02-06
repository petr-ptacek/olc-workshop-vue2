import { faker } from '@faker-js/faker/locale/cz';

/**
 * @returns {import('@/types').User}
 */
export function createUser() {
  const id = faker.datatype.uuid();
  const sexType = faker.name.sexType();
  const firstName = faker.name.firstName(sexType);
  const lastName = faker.name.lastName(sexType);
  const avatar = faker.internet.avatar();
  const sex = { male: 'male', female: 'female' }[sexType];

  return {
    id,
    sex,
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
  debugger
  return Array.from({ length: count }, () => createUser());
}