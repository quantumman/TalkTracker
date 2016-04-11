import m from 'mithril';

export default {
  url: 'api/v1/projects',
  create({ name, description }) {
    return m.request({ method: 'POST', url: this.url, data: { name, description } });
  },
  retrieve() {
    return m.request({ method: 'GET', url: this.url });
  },
  update({ id }) {
    return m.request({ method: 'PATCH', url: `api/v1/projects/${id}` });
  },
};
