import { createStore } from redux

const initialState = {
    todos: [],
    nextId: 1
}

const TodoReducer = (state = initialState.action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {}
        case "EDIT_TODO":
            return {}
        case "DELETE_TODO":
            return {}
        default:
            return state
    }
}

const store = createStore(TodoReducer)

export default store;