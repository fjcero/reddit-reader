const RedditReaderReducer = (
  state = { opened: false, sent: false },
  action
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default RedditReaderReducer;