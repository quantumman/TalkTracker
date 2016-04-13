import './style.scss';

import BasePage from '../BasePage';
import ProjectCard from '../ui/ProjectCard';

import BaseViewModel from '../BaseViewModel';

class ViewModel extends BaseViewModel {
}

export default {
  controller() {
    return new ViewModel();
  },

  view(ctrl) {
    return (
      <BasePage {...ctrl} hideIconMenuList={true}>
        <div class="projects-page">
          {
            ctrl.projects().map(p =>
              <ProjectCard {...p} />
            )
          }
        </div>
      </BasePage>
    );
  },
};
