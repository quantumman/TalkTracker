import './style.scss';

import BasePage from '../BasePage';
import Pagination from '../ui/Pagination';
import Time from '../ui/HumanReadableRelativeTime';

import Project from '../../models/Project';

import BaseViewModel from '../BaseViewModel';

class ViewModel extends BaseViewModel {
  constructor() {
    super();

    this.pageNumber = m.prop(1);
  }

  init() {
    this.pageNumber(parseInt(m.route.param('page') || '1', 10));
    this.messages = this.current
                        .then(p => Project.messages(p, this.pageNumber))
                        .then(this.messages);
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
        <div class="messages-page">
          <div class="ui grid">
            <div class="column">
              <div class="ui list">
                {
                  ctrl.messages().data.map(message =>
                    <a class="item" key={m.id}>
                      <img class="ui avatar image" src={message.creator.avatar} />
                      <div class="content">
                        <div class="header">
                          {message.title}
                        </div>
                        <div class="description">
                          {message.creator.name} posted <Time value={message.created_at}></Time>
                        </div>
                      </div>
                    </a>
                  )
                }
              </div>
            </div>
          </div>
          <div class="ui two column centered grid">
            <div class="column">
              <Pagination page={ctrl.pageNumber}
                          link={ctrl.messages().link}
                          href={`/${ctrl.current().id}/messages`}
                          param={ctrl.param}
              >
              </Pagination>
            </div>
          </div>
        </div>
      </BasePage>
    );
  },
};
