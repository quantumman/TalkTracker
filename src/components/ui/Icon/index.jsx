export default {
  controller(props) {
    return {
      onclick: props.onclick,

      config(element, isInitialized) {
        if (!isInitialized) {
          $(element).popup();
        }
      },
    };
  },

  view(ctrl, props) {
    return (
      <a class="item"
         onclick={ctrl.onclick}
         data-content={props.tooltip}
         data-variation="inverted"
         config={ctrl.config}
      >
        <i class={`${props.icon} icon`}></i>
      </a>
    );
  },
};
