 import { saveToStorage } from './storage';
import Api from '../config/api';
import md5 from 'md5';
import EventBus from './eventBus';

 class Auth {
  static async login({ email, fullName, password }, vue) {
    try {
      const avatar = `https://www.gravatar.com/avatar/${md5(email)}`;

      const user = {
        email,
        fullName,
        password,
        avatar
      }
      saveToStorage('user', user);

      const response = await Api.get('/b/5e457a38d18e401661780f67');
      const { data } = response;

      data ? saveToStorage('households', data) : false;
      EventBus.$emit('is-logged-in', data);
    } catch (e) {
      throw Error(e.message);
    }
  }
}

const { login } = Auth;

export { login };
