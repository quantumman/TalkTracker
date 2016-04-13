import './style.scss';

const Anchor = {
  view(ctrl, props, children) {
    const link = `/${props.current().id}/${props.action}`;
    const active = m.route() === link
                 ? 'active'
                 : '';
    return (
      <a class={`item ${active}`}
         href={link}
         config={m.route}>
        {children}
        {props.label}
      </a>
    );
  },
};

export default {
  controller() {
  },

  view(_ctrl, props) {
    return (
      <div class="icon-menu-list">
        <div class="ui vertical labeled icon menu">
          <a class="item"
             href={`/${props.current().id}/activity`}
             config={m.route}>
            <i class="line chart icon"></i>
            Activity
          </a>
          <a class="item"
             href={`/${props.current().id}/messages`}
             config={m.route}>
            <i class="comment icon"></i>
            Messages
          </a>
          <a class="item"
             href={`/${props.current().id}/tasks`}
             config={m.route}>
            <i class="tasks icon"></i>
            Tasks
          </a>
          <a class="item"
             href={`/${props.current().id}/setting`}
             config={m.route}>
            <i class="setting icon"></i>
            Setting
          </a>
        </div>
      </div>
    );
  },
};
