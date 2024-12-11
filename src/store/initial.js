/*
  Initial Global State
*/

let initialState = {
  // Configuration: used to store org specific configuration
  Configuration: {},
  // moduleHistory: used to keep track of push, pop, replace events on browser history
  moduleHistory: [],
  // display: used by modules to understand display context
  display: null,
  // activeLanguage: used by modules to determine language options
  activeLanguage: 'en-US',
};

export default initialState;
