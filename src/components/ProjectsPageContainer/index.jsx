import ProjectsPage from '../ProjectsPage';

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
      <div>
        <ProjectsPage {...ctrl} />
      </div>
    );
  },
};
