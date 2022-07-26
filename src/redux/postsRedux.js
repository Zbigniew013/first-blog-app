//selectors

// actions
const createActionName = actionName => `app/posts/${actionName}`;
const XXXXXXX = createActionName('XXXXXXX');

// action creators


const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case XXXXXXX:
      return [];
    default:
      return statePart;
  };
};

export default postsReducer;