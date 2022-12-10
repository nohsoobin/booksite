import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <div className="py-2">
        <Link href="/">bookweb home</Link>
      </div>

      <div className={styles.text}>
        <p>
          <p>
            <a href="https://huhuhu-phi.vercel.app/">노수빈 개인 포트폴리오</a>
          </p>
          <p>
            <a href="https://mymy-hanyooja.vercel.app/">
              한유정 개인 포트폴리오
            </a>
          </p>
          <p>
            <a href="mymy-beige.vercel.app">임혜준 개인 포트폴리오</a>
          </p>
          <p>
            <a href="https://myblog-opal.vercel.app/">양유나 개인 포트폴리오</a>
          </p>

          <div className={styles.img}>
            <img src="/images/123123.jpg" />
          </div>
        </p>
      </div>
    </Layout>
  )
}
