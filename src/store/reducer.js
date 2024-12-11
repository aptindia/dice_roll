/*
  Application Wide Reducer Testing Purpose Data
*/

const reducer = (state, action) => {
  switch (action.type) {
    // Global
    case 'SET_CONFIGURATION':
      return { ...state, Configuration: action.payload };
    case 'SET_IDLE_MODE':
      return {
        ...state,
        moduleHistory: [],
        activeLanguage: 'en-US',
      };
    case 'SET_MODULE_HISTORY_REPLACE':
      return { ...state, moduleHistory: [action.payload] };
    case 'SET_MODULE_HISTORY_PUSH':
      return { ...state, moduleHistory: [...state.moduleHistory, action.payload] };
    case 'SET_MODULE_HISTORY_POP':
      return { ...state, moduleHistory: [...state.moduleHistory.slice(0, -1)] };
    case 'SET_DISPLAY_NAME':
      return { ...state, display: action.payload };
    case 'SET_ACTIVE_LANGUAGE':
      return { ...state, activeLanguage: action.payload };
    // Default
    default:
      return { ...state };
  }
};

export default reducer;
