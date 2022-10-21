import React, { FC } from 'react'

import styles from 'styles/ProfImg.module.css'


type ProfImgProps = {
  text: string
}

const ProfImg: FC<ProfImgProps> = (props) => {
  const { url } = props
  return (
    <div className={`${styles['border-radius']} ${styles['position']}`}>
      <img src={url}></img>
    </div>
  )
}

export default ProfImg
