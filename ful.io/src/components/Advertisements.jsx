import React from 'react'
import styles from '../style'
import {advertisements} from '../constants'

const Advertisements = () => {
  return (
    <div className={`flex sm:flex-row flex-col ${styles.paddingY} gap-7 justify-center items-center`}>
      {advertisements.map((item)=>(
        <div className={`flex flex-wrap `} key={item.id}>
          <img src={item.img}/>
        </div>
      ))}
    </div>
  )
}

export default Advertisements