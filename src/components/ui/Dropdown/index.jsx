import assign from 'object-assign';

export default {
  controller(props) {
    const defaultSeachProp = {
      enabled: typeof(props.search) !== 'undefined',
      placeholder: '',
      icon: <i class="search icon"></i>,
    };
    return {
      label: props.label,
      name: props.name,
      value: props.value,
      icon: props.icon,
      search: assign({}, defaultSeachProp, props.search),

      config: (element, isInitialized) => {
        if (isInitialized) {
          $(element).dropdown('refresh', { onChange: props.onchange });
        } else {
          $(element).dropdown({ onChange: props.onchange });
        }
      },
    };
  },

  view(ctrl, _props, children) {
    return (
      <div class="ui floating pointing dropdown labeled icon button" config={ctrl.config}>
        <input name={ctrl.name} type="hidden" value={ctrl.value} />
        {
          typeof(ctrl.icon) !== 'undefined'
          ? <i class={`${ctrl.icon} icon`}></i>
          : ''
        }
        <span class="text">{ctrl.label}</span>
        <div class="menu">
          {
            ctrl.search.enabled
            ? (
              <div class="ui icon search input">
                {ctrl.search.icon}
                <input type="text" placeholder={ctrl.search.placeholder} />
              </div>
            )
            : ''
          }
          <div class="scrolling menu">
            {children}
          </div>
        </div>
      </div>
    );
  },
};
