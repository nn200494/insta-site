import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import ProfImg from '../components/ProfImg'
import Menu from '../components/Menu'
import ProfileMassege from '../components/ProfileMassege'
import Footer from '../components/Footer'
import H1 from '../components/H1'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>nana Web系エンジニア</title>
        <meta name="description" content="プロフィールサイト" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <Header text='Nana Web系エンジニア' />
      <div>
        <ProfImg url='/profile.jpeg' />
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <Menu text='ポートフォリオ' url='https://github.com/nn200494?tab=repositories' />
          <Menu text='直接お話ししたい' url='https://pay-career.com/spot_request/2280491509/' />
          <Menu text='500px' url='https://500px.com/p/nanamurakami?view=photos' />
          <Menu text='愛猫アカウント' url='https://www.instagram.com/web_engineer_77/' />
        </div>
        <div style={{ margin: "3rem 0" }}>
          <H1 text='愛猫アカウント' />
          <ProfileMassege text='愛猫アカウント' />
        </div>
      </div>
      <Footer text='' />
    </div >
  )
}

export default Home
