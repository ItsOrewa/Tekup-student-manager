export const auth =  (state = {},action) => {
    switch(action.type){
        case 'LOGIN' : return action.payload;
        case 'LOGOUT' : return action.payload;
        default : return state
    }
};