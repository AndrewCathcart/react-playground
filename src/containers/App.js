import React from 'react'

import styles from './App.module.css'
import People from '../components/People/People'
import ControlCenter from '../components/ControlCenter/ControlCenter'

class App extends React.Component {
  constructor(props) {
    super(props)
    console.log('[App.js] constructor')
  }

  state = {
    people: [
      { id: 'dfgads13', name: 'Andy', age: 25 },
      { id: 'sdfsdfg2a', name: 'Bob', age: 21 },
      { id: 'dfghfgzzxc', name: 'George', age: 23 },
    ],
    showPeople: false,
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props)
    return state
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount')
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
        <People
          people={this.state.people}
          clicked={this.deletePersonHandler}
          changed={this.changeNameHandler}
        />
      )
    }

    return people
  }

  render() {
    console.log('[App.js] render')
    return (
      <div className={styles.App}>
        <ControlCenter
          showPeople={this.state.showPeople}
          people={this.state.people}
          clicked={this.togglePeopleHandler}
        />
        {this.displayPeople()}
      </div>
    )
  }
}

export default App
