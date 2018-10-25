import { api } from '../services/api/_apiFactoryWithHeader';


export const GET_TODOS = "GET_TODOS";
export const EDIT_TODO = "EDIT_TODOS";
export const DELETE_TODO = "DELETE_TODO";


export const getTodos = () => dispatch => {
    return api.get("todo")
    .then(res => {
        if (res.data && res.data.data) {
            dispatch({
                type: GET_TODOS,
                payload: res.data.data
            })
        }
    })
}


// ------------------------------------
// Reducer
// ------------------------------------

const initState = [
    {
        title : 'hello 1',
        body : 'note 1ahsdfaoidhfoadfasdfasdf',
        id: 1
    },
    {
        title : 'hello 2',
        body : 'note 1ahsdfaoidhfoadfasdfasdf',
        id: 2
    },
    {
        title : 'hello 3',
        body : 'note 1ahsdfaoidhfoadfasdfasdf',
        id: 3

    },
    {
        title : 'hello 4',
        body : 'note 1ahsdfaoidhfoadfasdfasdf',
        id: 4

    },
    {
        title : 'hello 1',
        body : 'note 1ahsdfaoidhfoadfasdfasdf',
        id: 5
    },
    {
        title : 'hello 2',
        body : 'note 1ahsdfaoidhfoadfasdfasdf',
        id: 6
    },
    {
        title : 'hello 3',
        body : 'note 1ahsdfaoidhfoadfasdfasdf',
        id: 7

    },
    {
        title : 'hello 4',
        body : 'note 1ahsdfaoidhfoadfasdfasdf',
        id: 8

    },
]

export default (state = initState, action) => {
    switch(action.type) {
        case GET_TODOS: {
            return action.payload;
        }
        case EDIT_TODO: {

        }
        case DELETE_TODO: {

        }
        default: return state;
    }
}
