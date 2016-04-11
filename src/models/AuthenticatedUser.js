
import m from 'mithril';

export default {
  login({ username, password }) {
    return m.request({
      method: 'POST',
      url: 'api/v1/sessions',
      data: { username, password },
    });
  },
  get() {
    return m.request({ method: 'GET', url: 'api/v1/user' });
  },
};
