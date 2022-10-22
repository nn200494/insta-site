import React, { FC } from 'react'

import styles from 'styles/ProfImg.module.css'


type ProfImgProps = {
  text: string
}

const ProfImg: FC<ProfImgProps> = (props) => {
  const { url } = props
  return (
    <div className={`${styles['position']}`}>
      <img src={url} className={`${styles['border-radius']}`}>
      </img>
    </div>
  )
}

export default ProfImg
