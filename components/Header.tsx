import React, { FC } from 'react'

import styles from 'styles/header.module.css'


type HeaderProps = {
  text: string
}

const Header: FC<HeaderProps> = (props) => {
  const { text } = props
  return (
    <div className={styles['header']}>
      <p>{text}</p>
    </div>
  )
}

export default Header
