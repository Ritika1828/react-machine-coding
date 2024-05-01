import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'
import Card from './Card'
import { Link } from 'react-router-dom'

const componentList = [
    {
        name: 'Progress Bar',
        path: '/progressBar',
        status: 'completed'
    },
    {
        name: 'AutoComplete',
        path: '/autocomplete',
        status: 'pending'
    },
    {
        name: 'Star Container',
        path: '/star-container',
        status: 'progress'
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
