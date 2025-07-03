import React from 'react'
import Navbar from '../Navbar/Navbar'
import Styles from './Report.module.css'

const Report = () => {
  return (
    <> 
    < Navbar />
    <div className={Styles.reportheader} >
    <div> Customer Report </div>
    <div> Stock Report </div>
    <div> Sales Report </div>
    <div> Receipt Report </div>
    </div>
    </>
  )
}

export default Report