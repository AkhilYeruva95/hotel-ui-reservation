import { editDataConversion } from "../Hook/dataConversion";

export const addDetails = (detail: any, dispatch: any) => {
    console.log('action added');
    dispatch({
        type: 'ADD_TODO',
        detail,
    });
};

export const removeDetails = (todoId: any, dispatch: any) => {
    dispatch({
        type: 'REMOVE_TODO',
        todoId,
    });
};
export const formActionHandle = (
    name: any,
    val: any,
    dispatch: any,
    state: any,
) => {
    const details = {
        ...state?.formVal,
        [name]: val,
    };
    console.log('details', details, name, state, val);
    dispatch({
        type: 'FORM_HANDLE',
        details,
    });
};
export const formEditActionHandle = (details: any, dispatch: any, state: any) => {
    console.log('details', details, state, details, editDataConversion(details));
    dispatch({
        type: 'FORM_HANDLE',
        details: editDataConversion(details),
    });
};

export const editDetails = (Id: any, detail: any, dispatch: any) => {
    dispatch({
        type: 'EDIT_TODO_TAG',
        Id,
        detail,
    });
};
