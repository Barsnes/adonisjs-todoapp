'use strict'

class UpdateTodo {
  get rules () {
    return {
      editTodo: 'required|min:3'
    }
  }

  get messages(){
    return {
      'editTodo.required': 'The edit todo field is required',
      'editTodo.min': 'You need a minimum of three characters'
    }
  }
}

module.exports = UpdateTodo
