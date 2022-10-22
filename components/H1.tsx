import React, { FC } from 'react'

import styles from 'styles/H1.module.css'


type H1Props = {
  text: string
}

const Menu: FC<H1Props> = (props) => {
  const { text } = props
  return (
    <div className={styles['h1']}>
      <h1 className={styles['title']}>My Profile</h1>
    </div>
  )
}

export default Menu
