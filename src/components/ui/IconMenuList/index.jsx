import './style.scss';

export default {
  controller() {
  },

  view() {
    return (
      <div class="icon-menu-list">
        <div class="ui vertical labeled icon menu">
          <a class="item">
            <i class="line chart icon"></i>
            Activity
          </a>
          <a class="item">
            <i class="comment icon"></i>
            Messages
          </a>
          <a class="item">
            <i class="tasks icon"></i>
            Tasks
          </a>
          <a class="item">
            <i class="setting icon"></i>
            Setting
          </a>
        </div>
      </div>
    );
  },
};
