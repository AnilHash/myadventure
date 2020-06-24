const initialState = []
export default (state = initialState ,action) => {
    switch(action.type){
        case 'SET-POSTS' : {
            return [...action.payload]
        }
        default : {
            return [...state]
        }
    }
}