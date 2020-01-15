const TOGGLE_SIDEBAR = 'APP__SIDEBAR__TOGGLE'

const AppReducer = (state = { opened: false, sent: false }, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      const toggle = !action.sidebar;
      return { ...state, sidebar: toggle };
    default:
      return state;
  }
};

export default AppReducer;
