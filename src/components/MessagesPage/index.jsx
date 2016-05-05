import './style.scss';

import assign from 'object-assign';

import BasePage from '../BasePage';
import Pagination from '../ui/Pagination';
import Time from '../ui/HumanReadableRelativeTime';
import Dropdown from '../ui/Dropdown';
import Item from '../ui/Item';

import Project from '../../models/Project';

import BaseViewModel from '../BaseViewModel';

class ViewModel extends BaseViewModel {
  constructor() {
    super();

    this.pageNumber = m.prop(1);
  }

  init() {
    this.param = {
      t: m.route.param('t'),
      s: m.route.param('s'),
      page: m.route.param('page'),
    };
    this.pageNumber(parseInt(this.param.page || '1', 10));
    this.messages = this.current
                        .then(p => Project.messages(p, this.param))
                        .then(this.messages);
  }

  onChangeTagFilter(value, _text, _$choice) {
    const param = assign({}, m.route.param(), { page: 1, t: value });
    const route = m.route();
    m.route(route, param);
  }

  onChangeSort(value, _text, _$choice) {
    const param = assign({}, m.route.param(), { page: 1, s: value });
    const route = m.route();
    m.route(route, param);
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
              <button class="ui primary button">Post a new message</button>
              <div class="ui top attached menu">
                <div class="right menu">
                  <a class="ui item">
                    <Dropdown label="Tags"
                              icon="filter"
                              search={{ placeholder: 'Search Tags...' }}
                              value={ctrl.param.t}
                              onchange={ctrl.onChangeTagFilter}
                    >
                      <Item text="Important" color="red" />
                      <Item text="Text" color="green" />
                    </Dropdown>
                  </a>
                  <a class="ui item">
                    <Dropdown label="Sort"
                              icon="dropdown"
                              value={ctrl.param.s}
                              onchange={ctrl.onChangeSort}
                    >
                      <Item text="Newest" />
                      <Item text="Oldest" />
                    </Dropdown>
                  </a>
                </div>
              </div>

              <div class="ui relaxed divided items segment bottom attached">
                {
                  ctrl.messages().data.map(message =>
                    <a class="item" key={m.id}>
                      <img class="ui tiny image" src={message.creator.avatar} />
                      <div class="middle aligned content">
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
