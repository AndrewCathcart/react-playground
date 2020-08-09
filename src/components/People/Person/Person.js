import React from 'react'
import WithClass from '../../../hoc/WithClass'
import styles from './Person.module.css'

class Person extends React.Component {
  render() {
    return (
      <WithClass classes={styles.Person}>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I'm {this.props.age} years old.
        </p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.change} value={this.props.name} />
      </WithClass>
    )
  }
}

export default Person
