import React, { FC } from 'react'

import styles from 'styles/Footer.module.css'
import Sns from '../components/Sns'


type FooterProps = {
  text: string
}

const Footer: FC<FooterProps> = (props) => {
  const { text } = props
  return (
    <div className={styles['Footer']}>
      <Sns text='' />
      <p>© 2022 Inc Umu.</p>
    </div>
  )
}

export default Footer
