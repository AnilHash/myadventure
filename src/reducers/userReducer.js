const initialState = {}
export default (state = initialState ,action) => {
    switch(action.type){
        case 'SET-USER' : {
            return {...action.payload}
        }
        default : {
            return {...state}
        }
    }
}