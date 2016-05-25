import './style.scss';

import Callout from '../Callout';

export default {
  controller() {
  },

  view(_ctrl, props) {
    const comments = props.comments || m.prop([]);

    return (
      <div class="timeline">
        <div class="timeline-bar"></div>
        {
          comments().map(c =>
            <div>
              <img class="ui avatar image" src={c.creator.avatar} />
              <div class="callout">
                <Callout header={c.created_at}>
                  {c.body}
                </Callout>
              </div>
            </div>
          )
        }
      </div>
    );
  },
};
