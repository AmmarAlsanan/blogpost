import CreateContext from "./CreateContext";
import apiJson from "../../Api/jsonServer";

//create reducer

const reducer = (state, action) => {
  switch (action.type) {
    case "GETBLOGPOST":
      return action.payload;

    case "CREATE":
      return [
        ...state,
        {
          status: action.payload.status,
          statusText: action.payload.statusText,
        },
      ];
    case "EDIT":
      return [
        ...state,
        {
          status: action.payload.status,
          statusText: action.payload.statusText,
        },
      ];

    case "DELETE":
      return state.filter((blogPost) => blogPost.id !== action.payload);
    default:
      return state;
  }
};

//create action
const fetchBlogPost = (dispatch) => {
  return async () => {
    const response = await apiJson.get("/blogposts");

    dispatch({ type: "GETBLOGPOST", payload: response.data });
  };
};

const addBlogPost = (dispatch) => {
  return async (title, context) => {
    const response = await apiJson.post("/blogposts", { title, context });
    // dispatch({
    //   type: "CREATE",
    //   payload: { status: response.status, statusText: response.statusText },
    // });
  };
};

const editBlogPost = (dispatch) => {
  return async (id, title, context) => {
    const response = await apiJson.put(`/blogposts/${id}`, {
      title,
      context,
    });
    // dispatch({
    //   type: "EDIT",
    //   payload: { status: response.status, statusText: response.statusText },
    // });
  };
};

const DeleteBlogPost = (dispatch) => {
  return async (id) => {
    await apiJson.delete(`/blogposts/${id}`);
    dispatch({ type: "DELETE", payload: id });
  };
};

export const { Context, Provider } = CreateContext(
  reducer,
  { addBlogPost, DeleteBlogPost, editBlogPost, fetchBlogPost },
  []
);
