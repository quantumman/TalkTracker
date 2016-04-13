import AuthenticatedUser from '../../models/AuthenticatedUser';
import Project from '../../models/Project';

export default class BaseViewModel {
  constructor() {
    this.user = AuthenticatedUser.get();
    this.projects = Project.retrieve();
  }
}
