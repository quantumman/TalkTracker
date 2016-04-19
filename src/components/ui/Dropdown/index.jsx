export default {
  controller(props) {
    return {
      label: props.label,
    };
  },

  view(ctrl) {
    return (
      <div class="ui floating pointing dropdown labeled icon button">
        <i class="filter icon"></i>
        <span class="text">{ctrl.label}</span>
      </div>
    );
  },
};
