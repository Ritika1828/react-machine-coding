import React from 'react'
import { Link } from 'react-router-dom'

import styles from './index.module.scss'

export default function Header() {
  return (
    <div className={styles.header}>
        <Link to='/'>
             React Project
        </Link>
    </div>
  )
}
