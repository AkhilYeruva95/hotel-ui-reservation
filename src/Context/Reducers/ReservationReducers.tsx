
const addDetail = (state: any, detail: any) => {
    const newTodo = {
        id:
            (state.todoList.length > 0 && state.todoList[state.todoList.length - 1].id + 1) ||
            0,
        ...detail,
        tag: 'active',
    };

    return { ...state, todoList: [...state.todoList, newTodo] };
};

const removeDetail = (state: any, todoId: any) => {
    const newTodoList = state.todoList.filter((todo: any) => todo.id !== todoId);

    return { ...state, todoList: newTodoList }
};

const formDetails = (state: any, details: any) => {
    console.log("formDetails", state, details)

    return { ...state, formVal: details }
};

const editDetail = (state: any, id: any, detail: any) => {
    const todo = state.todoList.find((todo: any) => todo.id === id);
    const todoIndex = state.todoList.indexOf(todo);
    const newTodo = { ...todo, detail };

    const newTodoList = [
        ...state.todoList.slice(0, todoIndex),
        newTodo,
        ...state.todoList.slice(todoIndex + 1),
    ];
    console.log("newTodoList", newTodoList);

    return { ...state, todoList: newTodoList }
};

export const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'ADD_TODO':
            return addDetail(state, action.detail);
        case 'REMOVE_TODO':
            return removeDetail(state, action.detail);
        case 'EDIT_TODO_TAG':
            return editDetail(state, action.Id, action.detail);
        case 'FORM_HANDLE':
            return formDetails(state, action.details);
        default:
            return state;
    }
};