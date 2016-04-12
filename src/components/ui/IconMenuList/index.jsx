import './style.scss';

export default {
  controller() {
  },

  view() {
    return (
      <div class="icon-menu-list">
        <div class="ui vertical labeled icon menu">
          <a class="item"
             href="/activity"
             config={m.route}>
            <i class="line chart icon"></i>
            Activity
          </a>
          <a class="item"
             href="/messages"
             config={m.route}>
            <i class="comment icon"></i>
            Messages
          </a>
          <a class="item"
             href="/tasks"
             config={m.route}>
            <i class="tasks icon"></i>
            Tasks
          </a>
          <a class="item"
             href="/setting"
             config={m.route}>
            <i class="setting icon"></i>
            Setting
          </a>
        </div>
      </div>
    );
  },
};
