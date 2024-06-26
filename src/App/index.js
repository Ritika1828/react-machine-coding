import React from "react";
import {Outlet} from 'react-router-dom'
import styles from './index.module.scss'
import Header from "./Header";

function AppLayout(props) {
  return (
    <div className={styles.container}>
     <Header/>
    <Outlet />
    </div>
  )
}


export default AppLayout;
