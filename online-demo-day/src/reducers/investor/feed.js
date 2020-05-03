const initialState = {
  feed: []
}

const feed = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FEED":
      return { ...state, feed: action.payload.feed }
    // case "SELECT_POST_ID":
    //   return { ...state, selectedPostId: action.payload.postId }
    // case "SET_POST_DETAILS":
    //   return { ...state, selectedPost: action.payload.postId }
    default:
      return state;
  }
}

export default feed;