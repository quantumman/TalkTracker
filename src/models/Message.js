import m from 'mithril';

export default {
  retrieve({ projectId, id }) {
    return m.request({ method: 'GET', url: `api/v1/projects/${projectId}/${id}` })
            .then(message => {
              message.comments = this.comments(message); // eslint-disable-line no-param-reassign
              return message;
            });
  },

  comments(message) {
    return m.request({
      method: 'GET',
      url: message.comments_url,
      initialValue: [],
    });
  },
};
