import React from 'react'

import styles from './App.module.css'
import People from '../components/People/People'

class App extends React.Component {
  state = {
    people: [
      { id: 'dfgads13', name: 'Andy', age: 25 },
      { id: 'sdfsdfg2a', name: 'Bob', age: 21 },
      { id: 'dfghfgzzxc', name: 'George', age: 23 },
    ],
    showPeople: false,
  }

  // Always update state immutably
  deletePersonHandler = (personIndex) => {
    const people = [...this.state.people]
    people.splice(personIndex, 1)
    this.setState({ people: people })
  }

  changeNameHandler = (event, id) => {
    const personIndex = this.state.people.findIndex((person) => person.id === id)

    // Get inputted name
    const person = { ...this.state.people[personIndex] }
    person.name = event.target.value

    // Get current state and update the person object
    const people = [...this.state.people]
    people[personIndex] = person

    this.setState({ people: people })
  }

  togglePeopleHandler = () => {
    const currentDisplayState = this.state.showPeople
    this.setState({ showPeople: !currentDisplayState })
  }

  displayPeople = () => {
    let people = null
    if (this.state.showPeople) {
      people = (
        <div>
          <People
            people={this.state.people}
            clicked={this.deletePersonHandler}
            changed={this.changeNameHandler}
          />
        </div>
      )
    }

    return people
  }

  render() {
    return (
      <div className={styles.App}>
        <h1>Hello</h1>
        <p
          className={[
            this.state.people.length <= 2 ? styles.red : '',
            this.state.people.length <= 1 ? styles.bold : '',
          ].join(' ')}
        >
          Messing around with styles
        </p>
        <button
          className={this.state.showPeople ? [styles.Button, styles.Red].join(' ') : styles.Button}
          onClick={this.togglePeopleHandler}
        >
          Toggle People
        </button>
        {this.displayPeople()}
      </div>
    )
  }
}

export default App
