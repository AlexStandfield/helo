import React, { Component } from 'react'
import {Link} from 'react-router-dom'

// connect
import {connect} from 'react-redux'

class Nav extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                Nav
                {
                    this.props.location.pathname === '/' ? 
                    null
                    :
                    <div>
                        <Link to='/dashboard' >
                            <button>
                                Home
                            </button>
                        </Link>

                        <Link to='/new' >
                            <button>
                                New Post
                            </button>
                        </Link>

                        <Link to='/' >
                            <button>
                                Logout
                            </button>
                        </Link>
                    </div>
                }
                
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        username: state.username,
        profile_pic: state.profile_pic
    }
}

export default connect(mapStateToProps)(Nav)