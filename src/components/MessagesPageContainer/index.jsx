import MessagesPage from '../MessagesPage';

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
      <MessagesPage {...ctrl} />
    );
  },
};
