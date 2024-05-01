import React from 'react'
import styles from './index.module.scss'

const IconList = {
    'pending': require('../assets/pending.png'),
    'completed': require('../assets/completed.png'),
    'progress': require('../assets/progress.png'),

}

export default function Card({ status , name}) {
  return (
    <div className={styles.cardBox}>
        <img src={IconList[status]} width={'32px'} height={'32px'}/>
         <h3 className={styles.heading}>{name}</h3>
    </div>
  )
}
