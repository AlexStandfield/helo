import React, { Component } from 'react'

import {connect} from 'react-redux'

class Form extends Component {
    constructor(){
        super()

        this.state = {
            title: '',
            img: '',
            content: ''
        }
    }



    render() {
        return (
            <div>
                <input placeholder='title' type='text' value={this.state.title} />
                <input placeholder='img URL' type='text' value={this.state.img} />
                <input placeholder='content' type='text' value={this.state.content} />

                <button>Post</button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        id: state.id
    }
}


export default connect(mapStateToProps)(Form)