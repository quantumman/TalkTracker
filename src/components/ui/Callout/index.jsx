import './style.scss';

export default {
  controller() {
  },

  view(_ctrl, props, children) {
    return (
      <div class="callout">
        <div class="ui segment">
          <div class="ui top attached label callout--left">
            {props.header}
          </div>
          <div>{children}</div>
        </div>
      </div>
    );
  },
};
