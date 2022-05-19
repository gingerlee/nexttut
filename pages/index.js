import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div className='home'>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Sunt nulla velit qui ipsum tempor aliquip tempor aute nostrud. Do qui cillum minim excepteur deserunt in. Occaecat sit nulla officia voluptate id esse ad tempor. Magna nulla tempor mollit commodo magna laborum consectetur consequat eu ipsum cillum consectetur laborum. Sit labore ex officia tempor consequat ullamco. Consectetur cillum labore occaecat minim consequat fugiat. Aliqua nulla exercitation id nulla cillum non.</p>
        <p className={styles.text}>Sunt nulla velit qui ipsum tempor aliquip tempor aute nostrud. Do qui cillum minim excepteur deserunt in. Occaecat sit nulla officia voluptate id esse ad tempor. Magna nulla tempor mollit commodo magna laborum consectetur consequat eu ipsum cillum consectetur laborum. Sit labore ex officia tempor consequat ullamco. Consectetur cillum labore occaecat minim consequat fugiat. Aliqua nulla exercitation id nulla cillum non.</p>

        <Link href="/ninjas">
          <a className={styles.btn} >See Ninja Listing</a>
        </Link>

      </div>
    </>
  )
}
