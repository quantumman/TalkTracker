import './style.scss';

import BasePage from '../BasePage';

import BaseViewModel from '../BaseViewModel';

class ViewModel extends BaseViewModel {
  init() {
  }
}

const vm = new ViewModel();

const editorMenu = (
  <div class="ui icon menu">
    <a class="item">
      <i class="bold icon"></i>
    </a>
    <a class="item">
      <i class="italic icon"></i>
    </a>
    <a class="item">
      <i class="strikethrough icon"></i>
    </a>
    <a class="item">
      <i class="linkify icon"></i>
    </a>

    <div class="item">
    </div>

    <a class="item">
      <i class="quote right icon"></i>
    </a>
    <a class="item">
      <i class="code icon"></i>
    </a>
    <a class="item">
      <i class="list icon"></i>
    </a>
    <a class="item">
      <i class="ordered list icon"></i>
    </a>
    <a class="item">
      <i class="outdent icon"></i>
    </a>

    <div class="right menu">
      <a class="item">
        <i class="arrow left icon"></i>
      </a>
      <a class="item">
        <i class="arrow right icon"></i>
      </a>
    </div>
  </div>
);

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
