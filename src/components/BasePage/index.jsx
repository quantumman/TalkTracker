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
          <div class="ui centered grid">
            <div class="menu">
            {
              props.hideIconMenuList
              ? <span />
              : <IconMenuList {...props} />
            }
            </div>
            <div class="twelve wide stretch column">
              {children}
            </div>
          </div>
        </Nav>
      </div>
    );
  },
};
