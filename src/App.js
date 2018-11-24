import React, { Component } from 'react'

import Header from './Components/Header'
import Form from './Components/Form'
import Orders from './Components/Orders'

class App extends Component {

  render() {

    return (
      <div>
          <div>
              <Header />
          </div>
          <div>
              <Form />
          </div>
          <div>
              <Orders />
          </div>
      </div>
    )
  }
}

export default App
