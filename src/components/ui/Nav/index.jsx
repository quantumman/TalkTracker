import './style.scss';

import Container from '../Container';

export default {
  controller() {
  },

  view(_ctrl, _props, children) {
    return (
      <div class="nav">
        <div class="ui menu">
        </div>
        <Container>
          {children}
        </Container>
      </div>
    );
  },
};
