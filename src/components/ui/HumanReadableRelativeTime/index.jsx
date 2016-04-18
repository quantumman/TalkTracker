import moment from 'moment';

export default {
  controller() {
    return {
      fromNow(time) {
        const now = moment.utc();
        const d = moment(time).utc();
        return now.diff(d, 'weeks') === 0
             ? moment(time).fromNow()
             : moment(time).format('LL');
      },
    };
  },

  view() {
    return (
      <span>
      </span>
    );
  },
};
