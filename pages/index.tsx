import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from 'components/Header'
import ProfImg from 'components/ProfImg'
import Menu from 'components/Menu'
import ProfileMassege from 'components/ProfileMassege'
import Footer from 'components/Footer'


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>nana Web系エンジニア</title>
        <meta name="description" content="プロフィールサイト" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header text='nana Web系エンジニア' />
      <ProfImg url='' />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Menu text='ポートフォリオ' url='https://github.com/nn200494' />
        <Menu text='直接お話ししたい' url='https://pay-career.com/spot_request/2280491509/' />
        <Menu text='500px' url='https://500px.com/p/nanamurakami?view=photos' />
        <Menu text='愛猫アカウント' url='' />
      </div>
      <ProfileMassege text='愛猫アカウント' url='' />
      <Footer text='@copylight' />
    </div>
  )
}

export default Home
