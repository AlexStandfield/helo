import React, { Component } from 'react'

import {connect} from 'react-redux'

class Dashboard extends Component {
    constructor(){
        super()

        this.state = {
            posts: [],
            search: '',
            userposts: true
        }
    }



    render() {
        const mappedPosts = this.state.posts.map((posts, i) => {
            return (
                <div>
                    {posts.title}
                    {posts.username}
                    {posts.profile_pic}
                </div>
            )
        })
        return (
            <div>
                Dashboard
                <input type='text'
                 placeholder='search' 
                 name='search'
                 value={this.state.search}
                 />
                
                <button>Search</button>
                <button>Reset</button>

                <input type='checkbox'
                 value='userposts'
                 name='userposts'
                />
                {mappedPosts}
            </div>
        )
    }
}

function mapToStateProps(state){
    return {
        id: state.id
    }
}

export default connect(mapToStateProps)(Dashboard)