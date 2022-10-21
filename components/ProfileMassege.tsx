import React, { FC } from 'react'

import styles from 'styles/ProfileMassege.module.css'


type ProfileMassegeProps = {
  text: string
  url: string
}

const ProfileMassege: FC<ProfileMassegeProps> = (props) => {
  const { text, url } = props
  return (
    <div className={styles['profile-wrap']}>
      <h1 className={styles['title']}>My Profile</h1>
      <p>エンジニア歴4年目の社会人。<br />
        (Java歴：2年、PHP歴2年ほど)<br /><br />

        雪山であるシステムエンジニアの方と<br />
        出会い影響を受けエンジニアを目指す。<br /><br />

        独学で勉強したが、挫折（笑）<br />
        その後やさぐれてオーストラリアに。<br />
        一年間ワーキングホリデーに行ってデミペア<br />
        （住込ベビーシッター）をしていました。<br /><br />

        ホストマザーが育児ノイローゼになり、<br />
        家を追い出されてキャラバン生活したり<br />
        少しだけ大変なこともありました。<br />
        （それはそれで面白かったですが）<br /><br />

        ホストファーザーがSEのファイミリーを<br />
        選んだりエンジニアへの未練がたらたら<br />
        だったので、帰ってきてSESに就職。<br /><br />

        （就活する前に箱根で中居さんしたり、<br />
        ヨーロッパに一ヶ月旅行に行ったりしました）<br /><br />

        そこから2年程心が死にながらも修行、、、<br />
        現在は渋谷のベンチャー企業に転職<br />
        エンジニアになり4年ほどが経とうとしています。幸

      </p>
    </div>
  )
}

export default ProfileMassege
