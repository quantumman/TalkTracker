import m from 'mithril';

export default {
  url: 'api/v1/projects',
  create({ name, description }) {
    return m.request({ method: 'POST', url: this.url, data: { name, description } });
  },
  retrieve() {
    return m.request({ method: 'GET', url: this.url, initialValue: [] })
            .then(ps => ps.map(p => {
              this.events(p);
              p.events = this.events(p); // eslint-disable-line no-param-reassign
              return p;
            }));
  },
  update({ id }) {
    return m.request({ method: 'PATCH', url: `api/v1/projects/${id}` });
  },
  events(project) {
    return m.request({
      method: 'GET',
      url: project.events_url,
      initialValue: [],
    });
  },
};
