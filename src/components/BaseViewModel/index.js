import AuthenticatedUser from '../../models/AuthenticatedUser';

class BaseViewModel {
  constructor() {
    this.user = AuthenticatedUser.get();
  }
}

export default new BaseViewModel();
