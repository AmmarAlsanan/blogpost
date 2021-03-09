import React, { useReducer } from "react";

export default (reducer, action, initalState) => {
  //create the Context
  const Context = React.createContext();

  //create Provider
  const Provider = ({ children }) => {
    //create reducer
    const [state, dispatch] = useReducer(reducer, initalState);

    //create action
    const boundAction = {};
    for (let key in action) {
      boundAction[key] = action[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundAction }}>
        {children}
      </Context.Provider>
    );
  };
  return { Context, Provider };
};
