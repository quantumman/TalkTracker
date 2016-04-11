import './style.scss';

export default {
  view(_ctrl, _props, children) {
    return (
      <div class="ui main container">
        {children}
      </div>
    );
  },
};
