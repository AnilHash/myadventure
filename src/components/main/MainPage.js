import React from 'react'
import { connect } from 'react-redux'

function MainPage(props){
    return(
    <div style={{width: "18rem", margin:"auto"}}>
        
        <h1>User : {props.user.name}</h1>
        <ul>
            {props.posts.map(post=>{
                return <div key={post.id} className="card" style={{width: "18rem", margin:"auto"}}>
                            <img src="https://source.unsplash.com/random" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text"> {post.body} </p>
                                <p className="btn btn-primary">Go somewhere</p>
                            </div>
                        </div>
        })}
        </ul>
    </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user : state.user,
        posts : state.posts
    }
}

export default connect(mapStateToProps)(MainPage)