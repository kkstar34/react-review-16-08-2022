import React, { Component } from 'react'

class ExampleClass extends Component {
    state = {
        count : 0
    }
    setCount = () => {
        this.setState({ count : this.state.count + 1});
    }


    // componentDidMount() {
    //     alert('le composant est bien monté')
    // }

    // componentDidUpdate() {
    //     alert('le composant est mis à jour')
    // }


  render() {
    return (
        <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setCount()}>
          Click me
        </button>
      </div>
    )
  }
}

export default ExampleClass;
