import React, { FC } from 'react'

import styles from 'styles/Menu.module.css'


type MenuProps = {
  text: string
  url: string
}

const Menu: FC<MenuProps> = (props) => {
  const { text, url } = props
  return (
    <a href={url} className={`${styles['box']} ${styles['position']}`} target='_blank' rel="noopener noreferrer">
      <p>{text}</p>
    </a>
  )
}

export default Menu
