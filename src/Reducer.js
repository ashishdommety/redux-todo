export default function changeTodosReducer(state=[], action){
  console.log(action.text);
  switch(action.type){
    case 'ADD_TODO':
    // to make it completely immutable, we make a copy of the state object and alter the copy as needed. Once altered, we return it.
      return [
        // this lays out the whole object's keys and properties -
        ...state,
        // - thus allows us to add an extra property this way.
        {
          text:action.text
        }
      ]
    default:
      return state;
  }
};
