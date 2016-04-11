import './style.scss';

import Nav from '../ui/Nav';
import IconMenuList from '../ui/IconMenuList';

export default {
  controller() {
  },

  view(_ctrl, props, children) {
    return (
      <div class="base-page">
        <Nav {...props}>
          <IconMenuList {...props} />
          {children}
        </Nav>
      </div>
    );
  },
};
