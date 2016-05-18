import './style.scss';

import BasePage from '../BasePage';

import BaseViewModel from '../BaseViewModel';

class ViewModel extends BaseViewModel {
  init() {
  }
}

const vm = new ViewModel();

export default {
  controller() {
    vm.init();
    return vm;
  },

  view(ctrl) {
    return (
      <BasePage {...ctrl}>
        <div class="message-post-page">
          <form class="ui form segment">
            <input type="text" />
            <textarea class="comment" />
          </form>
        </div>
      </BasePage>
    );
  },
};
