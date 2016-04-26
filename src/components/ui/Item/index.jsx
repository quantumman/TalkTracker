export default {
  controller(props) {
    const value = props.value || props.text;
    return {
      value,
      text: props.text,
      color: props.color,
    };
  },

  view(ctrl) {
    return (
      <div class="item"
           data-value={ctrl.value}
           data-text={ctrl.text}
      >
        {
          ctrl.color
          ? <div class={`ui ${ctrl.color} empty circular label`}></div>
          : ''
        }
        {ctrl.text}
      </div>
    );
  },
};
