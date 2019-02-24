export default function (state = {
  users: [],
  fetching: false,
  fetched: false,
  error: null
}, action) {
  switch (action.type) {
    case "FETCH_USERS": {
      return { ...state, fetching: true, fetched: false }
    }
    case "FETCH_USERS_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        users: action.payload
      }
    }
    case "FETCH_USERS_REJECTED": {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    }

    case "HIDE_ROW":{
      return Object.assign({}, state, {
        users: [...state.users.filter(item => item.objectID !== action.payload.objectID)],
      });
    }
    case "UP_POINT":{
      let newState = { ...state }
      newState.users.map( (user) => {
        if(user.objectID === action.payload.objectID){
          user.points++;
        }
      })
      return newState;
    }

  }
  return state;
}
