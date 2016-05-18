export default {
  controller() {
  },

  view(_ctrl, props) {
    return (
      <a class="item" data-content={props.tooltip}>
        <i class={`${props.icon} icon`}></i>
      </a>
    );
  },
};
