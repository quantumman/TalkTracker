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
          <Anchor label="Activity" action="activity" {...props}>
            <i class="line chart icon" />
          </Anchor>
          <Anchor label="Messages" action="messages" {...props}>
            <i class="comment icon" />
          </Anchor>
          <Anchor label="Tasks" action="tasks" {...props}>
            <i class="tasks icon" />
          </Anchor>
          <Anchor label="Setting" action="setting" {...props}>
            <i class="setting icon" />
          </Anchor>
        </div>
      </div>
    );
  },
};
