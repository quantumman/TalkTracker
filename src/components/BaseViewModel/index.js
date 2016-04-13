import AuthenticatedUser from '../../models/AuthenticatedUser';
import Project from '../../models/Project';

export default class BaseViewModel {
  constructor() {
    this.user = AuthenticatedUser.get();
    this.projects = Project.retrieve();
    this.current =
      this.projects
          .then(ps =>
            ps.find(p => p.id.toString() === m.route.param('project_id'))
          );
  }
}
