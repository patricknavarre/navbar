import React, { Component } from 'react'
import underConstruction from '../pics/underConstruction.jpeg'

export class Login extends Component {
    render() {
        return (
            <div>
                <img class="under-construction" src={underConstruction} />
            </div>
        )
    }
}

export default Login