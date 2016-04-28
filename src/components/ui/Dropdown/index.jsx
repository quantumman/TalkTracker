export default {
  controller(props) {
    return {
      label: props.label,
      placeholder: props.placeholder || '',
      name: props.name,

      config: (element, isInitialized) => {
        if (isInitialized) {
          $(element).dropdown('refresh');
        } else {
          $(element).dropdown();
        }
      },
    };
  },

  view(ctrl, props, children) {
    return (
      <div class="ui floating pointing dropdown labeled icon button" config={ctrl.config}>
        <input name={ctrl.name} type="hidden" value={props.value} />
        <i class="filter icon"></i>
        <span class="text">{ctrl.label}</span>
        <div class="menu">
          <div class="ui icon search input">
            <i class="search icon"></i>
            <input type="text" placeholder={ctrl.placeholder} />
          </div>
          <div class="scrolling menu">
            {children}
          </div>
        </div>
      </div>
    );
  },
};
