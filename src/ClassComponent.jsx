import React, { Component } from 'react'



class ClassComponent extends Component {

    state = {
        name : "Affali"
    }

    handleChangeName = () => {
        this.setState({ name : "Fode"});
    }


  render() {
    return (
      <div>
        <h1>mon nom est : {this.state.name}</h1>
        <button onClick={this.handleChangeName}>Changer le nom</button>
        <h3>Je suis le props {this.props.name}</h3>
      </div>
    )
  }
}

export default  ClassComponent



