import './style.scss';

import Nav from '../ui/Nav';

export default {
  controller() {
  },

  view(_ctrl, props, children) {
    return (
      <div class="base-page">
        <Nav {...props}>
          {children}
        </Nav>
      </div>
    );
  },
};
