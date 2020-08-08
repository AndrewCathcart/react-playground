import React from 'react'
import styles from './ControlCenter.module.css'

const controlCenter = (props) => {
  return (
    <div className={styles.ControlCenter}>
      <h1>Hello</h1>
      <p
        className={[
          props.people.length <= 2 ? styles.red : '',
          props.people.length <= 1 ? styles.bold : '',
        ].join(' ')}
      >
        Messing around with styles
      </p>
      <button className={props.showPeople ? [styles.RedButton] : null} onClick={props.clicked}>
        Toggle People
      </button>
    </div>
  )
}

export default controlCenter
