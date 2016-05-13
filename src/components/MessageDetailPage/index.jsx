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
          <Timeline comments={ctrl.message().comments} />
        </div>
      </BasePage>
    );
  },
};
