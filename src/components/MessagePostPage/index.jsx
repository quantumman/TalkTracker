import './style.scss';

import BasePage from '../BasePage';
import Icon from '../ui/Icon';

import BaseViewModel from '../BaseViewModel';

class ViewModel extends BaseViewModel {
  init() {
  }
}

const vm = new ViewModel();

const editorMenu = (
  <div class="ui icon menu">
    <Icon icon="bold" tooltip="Bold" />
    <Icon icon="italic" tooltip="Italic" />
    <Icon icon="strikethrough" tooltip="Strikethrough" />
    <Icon icon="linkify" tooltip="Linkify" />

    <div class="item"></div>

    <Icon icon="quote right" tooltip="Quote" />
    <Icon icon="code" tooltip="Code" />
    <Icon icon="list" tooltip="List" />
    <Icon icon="ordered list" tooltip="Ordered List" />
    <Icon icon="indent" tooltip="Indent" />
    <Icon icon="outdent" tooltip="Outdent" />

    <div class="right menu">
      <Icon icon="arrow left" tooltip="Undo" />
      <Icon icon="arrow right" tooltip="Redo" />
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
            <input type="text"
                   placeholder="Write the headline of this message..."
                   class="headline" />
            {editorMenu}
            <textarea class="comment"
                      placeholder="Type your message"
            />
          </form>
        </div>
      </BasePage>
    );
  },
};
