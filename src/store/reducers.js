const initialState={};

const reducer = (state = initialState, action)=>{

  switch(action.type){
    case "GET_DATA_FROM_API": {
      return {
        ...state,
        users: action.users,
      };
    }
    default: {
      return state;
    }
  }
}

export default reducer;