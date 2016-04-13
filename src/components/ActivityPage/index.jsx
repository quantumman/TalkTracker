import './style.scss';

import BasePage from '../BasePage';

import BaseViewModel from '../BaseViewModel';

class ViewModel extends BaseViewModel {
}

export default {
  controller() {
    return new ViewModel();
  },

  view(ctrl) {
    return (
      <BasePage {...ctrl}>
        <div class="activity-page">
        </div>
      </BasePage>
    );
  },
};
