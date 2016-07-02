/*{
    type: 'ADD_TODO',
    text: 'some string that the user input'
}*/

let actions = {
  addTodo: function (text) {
      return {
          type: 'ADD_TODO',
          text: text
      };
  }
};

export default actions;

//store.dispatch(addTodo('some text'));