import React from 'react'
import './App.css'
import Person from './Person/Person'
import Radium, { StyleRoot } from 'radium'

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

  displayPeople = (style) => {
    let people = null
    // passing an anon function is inefficient, use bind instead if needs be
    if (this.state.showPeople) {
      people = (
        <div>
          {this.state.people.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                key={person.id}
                click={() => this.deletePersonHandler(index)}
                change={(event) => this.changeNameHandler(event, person.id)}
              />
            )
          })}
        </div>
      )

      style.backgroundColor = 'red'
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black',
      }
    }
    return people
  }

  render() {
    let style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black',
      },
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hello</h1>
          <p
            className={[
              this.state.people.length <= 2 ? 'red' : '',
              this.state.people.length <= 1 ? 'bold' : '',
            ].join(' ')}
          >
            Messing around with styles
          </p>
          <button style={style} onClick={this.togglePeopleHandler}>
            Toggle People
          </button>
          {this.displayPeople(style)}
        </div>
      </StyleRoot>
    )
  }
}

export default Radium(App)
