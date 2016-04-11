import './style.scss';

import Container from '../Container';

export default {
  controller() {
  },

  view(_ctrl, props, children) {
    return (
      <div class="nav">
        <div class="ui small menu">
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
          {children}
        </Container>
      </div>
    );
  },
};
