import React, { FC } from 'react'

import styles from 'styles/Sns.module.css'


type SnsProps = {
  text: string
}

const Sns: FC<SnsProps> = (props) => {
  const { text } = props
  return (
    <div className={styles.sns_wrap}>
      <a href='https://www.instagram.com/web_engineer_77/' target='_blank' rel="noopener noreferrer"><img src="/insta-icon.png" ></img></a>
      <a href='https://twitter.com/@web_engineer_77' target='_blank' rel="noopener noreferrer"><img src="/twitter.png" ></img></a>
      <a href='https://www.facebook.com/nana.murakami.7146/' target='_blank' rel="noopener noreferrer"><img src="/facebook.png" ></img></a>
    </div>

  )
}

export default Sns
