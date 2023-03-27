import { useContext, useState } from 'react';
import { Store } from '../Store/Store';
import { formActionHandle } from '../Actions/ReservationActions';


export const useFromHook = () => {

    const { state, dispatch } = useContext(Store);
    //Form values
    const [values, setValues] = useState(state?.formVal);

    console.log('values', state, values);
    //A method to handle form inputs
    const handleChange = (event) => {
        //To stop default events    
        event.persist();
        // event.preventdefault();

        let name = event.target.name;
        let val = event.target.value;

        console.log('name, val', name, val);
        formActionHandle(name, val, dispatch, state)
        //Let's set these values in state
        setValues({
            ...values,
            [name]: val,
        })

    }

    const handleDateChange = (name, val) => {
        formActionHandle(name, val, dispatch, state)
        setValues({
            ...values,
            [name]: val,
        })
    }
    const handleOtherChange = (name, val) => {
        formActionHandle(name, val, dispatch, state)
        setValues({
            ...values,
            [name]: val,
        })
    }

    return {
        values,
        handleChange,
        state,
        dispatch,
        handleOtherChange,
        handleDateChange,
    }
}