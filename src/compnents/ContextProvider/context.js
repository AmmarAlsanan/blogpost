import CreateContext from "./CreateContext";

const initialState = [
  {
    id: "",
    title: "",
    context: "",
  },
];

//create reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE":
      return [
        ...state,
        {
          id: state.length + 1,
          title: action.payload.title,
          context: action.payload.context,
        },
      ];
    case "EDIT":
      return state.map((blogPost) => {
        console.log(blogPost);
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });

    case "DELETE":
      return state.filter((blogPost) => blogPost.id !== action.payload);
    default:
      return state;
  }
};

//create action
const addBlogPost = (dispatch) => {
  return (title, context) => {
    dispatch({ type: "CREATE", payload: { title, context } });
  };
};

const editBlogPost = (dispatch) => {
  return (id, title, context) => {
    dispatch({ type: "EDIT", payload: { id, title, context } });
  };
};

const DeleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "DELETE", payload: id });
  };
};

export const { Context, Provider } = CreateContext(
  reducer,
  { addBlogPost, DeleteBlogPost, editBlogPost },
  []
);
