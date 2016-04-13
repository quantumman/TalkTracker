import AuthenticatedUser from '../../models/AuthenticatedUser';
import Project from '../../models/Project';

class BaseViewModel {
  constructor() {
    this.user = AuthenticatedUser.get();
    this.projects = Project.retrieve();
  }
}

export default new BaseViewModel();
