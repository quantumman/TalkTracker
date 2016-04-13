import './style.scss';

import Container from '../Container';

export default {
  controller() {
    return {
      active: p => { // eslint-disable-line arrow-body-style
        return p.id.toString() === m.route.param('project_id')
        ? 'active'
        : '';
      },

      config: (element, isInitialized) => {
        if (isInitialized) {
          $(element).dropdown('refresh');
        } else {
          $(element).dropdown();
        }
      },
    };
  },

  view(ctrl, props, children) {
    return (
      <div class="nav">
        <div class="ui top fixed small menu">
          <div class="ui pointing dropdown item" config={ctrl.config}>
            Projects <i class="dropdown icon"></i>
            <div class="menu">
              {
                props.projects()
                     .map(p =>
                       <div class={`item ${ctrl.active(p)}`}>{p.name}</div>
                     )
              }
            </div>
          </div>
          <div class="right menu">
            <div class="item">
              <div class="ui icon input">
                <input class="search" type="text" placeholder="Search..." />
                <i class="search icon"></i>
              </div>
            </div>
            <div class="item">
              <img class="ui avatar image" src={props.user().avatar} />
              <span>{props.user().name}</span>
            </div>
          </div>
        </div>
        <Container>
          <div class="children">
            {children}
          </div>
        </Container>
      </div>
    );
  },
};
