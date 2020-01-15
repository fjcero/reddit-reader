const IS_LOADING = 'APP__LOADING';
const TOGGLE_SIDEBAR = 'APP__SIDEBAR__TOGGLE';

const AppReducer = (state = { sidebar: true }, action) => {
  switch (action.type) {
    case IS_LOADING:
      return state;
    case TOGGLE_SIDEBAR:
      const toggle = !action.sidebar;
      return { ...state, sidebar: toggle };
    default:
      return state;
  }
};

export default AppReducer;
