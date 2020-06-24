import axios from "axios"

export const startGetUser = (userId, redirect) => {
    return (dispatch) => {
        console.log('dgsg'+userId)
        axios.get('https://jsonplaceholder.typicode.com/users/' + userId)
            .then((response) => {
                const user = response.data
                console.log(user)
                dispatch(setUser(user))
                axios.get('https://jsonplaceholder.typicode.com/posts?userId=' + userId)
                    .then((res)=>{
                        dispatch(setPosts(res.data))
                        redirect()
                    })
                    
            })
    }
}

const setUser = (user) => {
    return {
        type : 'SET-USER', payload : user
    }
}

const setPosts = (posts) => {
    return {
        type : 'SET-POSTS', payload : posts 
    }
}