import './style.scss';

import BasePage from '../BasePage';
import Timeline from '../ui/Timeline';

import Message from '../../models/Message';

import BaseViewModel from '../BaseViewModel';

class ViewModel extends BaseViewModel {
  init() {
    this.param = {
      projectId: m.route.param('project_id'),
      id: m.route.param('id'),
    };

    this.message = Message.retrieve(this.param);
  }

  get labelColor() {
    const stateTable = {
      open: 'green',
      closed: 'red',
    };

    return stateTable[this.message().state];
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
        <div class="message-detail-page">
          <div class="header">
            <h1>{ctrl.message().title}</h1>
            <div class={`ui ${ctrl.labelColor} label`}>
              {ctrl.message().state}
            </div>
            <div>{ctrl.message().creator}</div>
          </div>
          <Timeline comments={ctrl.message().comments} />
        </div>
      </BasePage>
    );
  },
};
