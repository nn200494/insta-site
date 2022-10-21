import React, { FC } from 'react'

import styles from 'styles/Footer.module.css'


type FooterProps = {
  text: string
}

const Footer: FC<FooterProps> = (props) => {
  const { text } = props
  return (
    <div className={styles['Footer']}>
      <p>{text}</p>
    </div>
  )
}

export default Footer
