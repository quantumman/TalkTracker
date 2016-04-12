import ActivityPage from '../ActivityPage';

import AuthenticatedUser from '../../models/AuthenticatedUser';
import Project from '../../models/Project';

export default {
  controller() {
    return {
      user: AuthenticatedUser.get(),
      projects: Project.retrieve(),
    };
  },

  view(ctrl) {
    return (
      <ActivityPage {...ctrl} />
    );
  },
};
