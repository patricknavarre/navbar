import React, { Component } from 'react'
import veryNice from '../pics/veryNice.jpeg'

export class Home extends Component {
    render() {
        return (
            <div>
              <img class="under-construction" src={veryNice} alt="VERY NICE!!" />
            </div>
        )
    }
}

export default Home
