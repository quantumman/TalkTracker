import ProjectList from '../ProjectList';

import AuthenticatedUser from '../../models/AuthenticatedUser';

export default {
  controller() {
    return {
      user: AuthenticatedUser.get(),
    };
  },

  view(ctrl) {
    return (
      <div>
        <ProjectList {...ctrl} />
      </div>
    );
  },
};
