export default {
  controller() {
    return {
      config(element, isInitialized) {
        if (!isInitialized) {
          $(element).popup();
        }
      },
    };
  },

  view(ctrl, props) {
    return (
      <a class="item" data-content={props.tooltip} data-variation="inverted" config={ctrl.config}>
        <i class={`${props.icon} icon`}></i>
      </a>
    );
  },
};
