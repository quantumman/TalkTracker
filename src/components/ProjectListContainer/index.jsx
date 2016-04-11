import ProjectList from '../ProjectList';

export default {
  controller() {
  },

  view(ctrl) {
    return (
      <div>
        <ProjectList {...ctrl} />
      </div>
    );
  },
};
