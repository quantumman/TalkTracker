import './style.scss';

import Container from '../Container';

export default {
  controller() {
    return {
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
                     .map(p => <div class="item">{p.name}</div>)
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
          <div class="content">
            {children}
          </div>
        </Container>
      </div>
    );
  },
};
