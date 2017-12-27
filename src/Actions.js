export default function addTodo(text){
  console.log({type: 'ADD_TODO',
  text});
  return{
    type: 'ADD_TODO',
    text
  }
}
