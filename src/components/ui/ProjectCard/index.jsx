import './style.scss';

export default {
  controller() {
  },

  view(_ctrl, props) {
    return (
      <div class="project-card">
        <div class="ui card">
          <div class="content">
            <div class="header">{props.name}</div>
          </div>
          <div class="content">
            <h4 class="ui sub header">Activity</h4>
            <div class="ui small feed">
              {
                props.events().map(e =>
                  <div class="event">
                    <div class="content">
                      <div class="summary">
                        {e.actor.name} {e.event} this project
                      </div>
                    </div>
                  </div>
                )
              }
            </div>
            <div class="extra content">
              <a class="ui button"
                 config={m.route}
                 href={`/${props.id}/activity`}
              >
                Open
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  },
};
