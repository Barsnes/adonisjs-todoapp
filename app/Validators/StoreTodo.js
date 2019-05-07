'use strict'

class StoreTodo {
  get rules () {
    return {
      addTodo: 'required|min:3'
    }
  }

  get messages(){
    return {
      'addTodo.required': 'The add todo field is required',
      'addTodo.min': 'You need a minimum of three characters'
    }
  }
}

module.exports = StoreTodo
