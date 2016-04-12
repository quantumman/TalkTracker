import './style.scss';

import BasePage from '../BasePage';

export default {
  controller() {
  },

  view(_ctrl, props) {
    return (
      <BasePage {...props}>
        <div class="messages-page">
        </div>
      </BasePage>
    );
  },
};
