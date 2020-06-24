const initialState = []
export default (state = initialState ,action) => {
    switch(action.type){
        case 'SET-PHOTOS' : {
            return [...action.payload]
        }
        default : {
            return [...state]
        }
    }
}