import { createUser, createUsers, execWithDelay, getRandomNumber } from '@/utils';

export class UserService {
  /**
   * @type {TUser[]}
   */
  static _users = [];

  /**
   * @returns {TUser[]}
   */
  static get() {
    if ( !UserService._users.length ) {
      UserService._users = createUsers();
    }

    return structuredClone(UserService._users);
  }

  /**
   * @return {Promise<TUser[]>}
   */
  static async getAsync() {
    return execWithDelay(
      UserService.get.bind(null),
      getRandomNumber(0, 1000)
    );
  }

  /**
   * @param {string} id
   * @returns {TUser}
   */
  static delete(id) {
    const user = UserService._users.find(u => u.id === id);

    if ( !user ) {
      throw new Error(`DELETE: no user found with id: ${ id }`);
    }

    UserService._users = UserService._users.filter(u => u.id !== id);
    return user;
  }

  /**
   * @param {string} id
   * @returns {Promise<TUser>}
   */
  static async deleteAsync(id) {
    return execWithDelay(
      UserService.delete.bind(null, id),
      getRandomNumber(0, 1000)
    );
  }

  /**
   * @param {string} id
   * @param {TUserEditable} data
   * @returns {TUser}
   */
  static patch(id, data) {
    const idx = UserService._users.findIndex(u => u.id === id);
    const user = UserService._users[idx];

    if ( !user ) {
      throw new Error(`PATCH: Not found user with id: ${ id }`);
    }

    UserService._users[idx] = {
      ...UserService._users[idx],
      ...data,
      id: user.id,
      avatar: user.avatar
    };

    return UserService._users[idx];
  }

  /**
   * @param {string} id
   * @param {TUserEditable} data
   * @returns {Promise<TUser>}
   */
  static async patchAsync(id, data) {
    return execWithDelay(
      UserService.patchAsync.bind(null, id, data),
      getRandomNumber(0, 1000)
    );
  }

  /**
   * @param {Required<TUserEditable>} data
   * @returns {TUser}
   */
  static create(data) {
    const user = Object.assign(createUser(), data);
    UserService._users.push(user);

    return user;
  }

  /**
   * @param {Required<TUserEditable>} data
   * @returns {Promise<TUser>}
   */
  static async createAsync(data) {
    return execWithDelay(
      UserService.create.bind(null, data),
      getRandomNumber(0, 1000)
    );
  }
}


/**
 * @typedef {import('@/types').User} TUser
 * @typedef {import('@/types').UserEditable} TUserEditable
 **/
