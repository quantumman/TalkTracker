export default {
  controller(props) {
    return {
      label: props.label,

      config: (element, isInitialized) => {
        if (isInitialized) {
          $(element).dropdown('refresh');
        } else {
          $(element).dropdown();
        }
      },
    };
  },

  view(ctrl) {
    return (
      <div class="ui floating pointing dropdown labeled icon button" config={ctrl.config}>
        <i class="filter icon"></i>
        <span class="text">{ctrl.label}</span>
      </div>
    );
  },
};
