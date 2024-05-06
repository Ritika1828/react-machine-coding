import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'
import Card from './Card'
import { Link } from 'react-router-dom'

const componentList = [
    
    {
        name: 'CountDown Timer',
        path: '/countdowntimer',
        status: 'completed'
    },
    {
        name: 'Star Container',
        path: '/star-container',
        status: 'completed'
    },
    {
        name: 'OTP Screen',
        path: '/otp-screen',
        status: 'completed'
    },
    {
        name: 'Progress Bar',
        path: '/progressBar',
        status: 'pending'
    },
    {
        name: 'Auto Complete',
        path: '/auto-complete',
        status: 'completed'
    },
    
    {
        name: 'Counter',
        path: '/counter',
        status: 'completed'
    },
    {
        name: 'Circle with Random Color',
        path: '/circle-random-color',
        status: 'completed'
    },
]


function ReactAllComponent(props) {
  return (
    <div className={styles.compBox}>
        {
            componentList.map((item, index)=> {
                return (
                    <Link to={item.path}>
                     <Card key={index} {...item}/>
                    </Link> 
                )
            })
        }
       
    </div>
  )
}

ReactAllComponent.propTypes = {}

export default ReactAllComponent
