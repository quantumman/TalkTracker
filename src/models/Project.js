import m from 'mithril';
import parse from 'parse-link-header';

const linkHeader = xhr => {
  if (xhr.status === 200) {
    const link = parse(xhr.getResponseHeader('Link'));
    const response = JSON.parse(xhr.responseText);
    return JSON.stringify({ data: response, link });
  }

  return xhr.responseText;
};

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
  messages(project, args) {
    return m.request({ method: 'GET', url: project.messages_url, data: args, extract: linkHeader });
  },
};
