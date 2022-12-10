import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <div className="py-2">
        <Link href="/">bookweb home</Link>
      </div>
      <div>
        <h2>노수빈 개인 포트폴리오</h2>
        <a href="https://huhuhu-phi.vercel.app">NOH</a>
        <h2>한유정 개인 포트폴리오</h2>
        <a href="https://mymy-hanyooja.vercel.app">HAN</a>
        <h2>임혜준 개인 포트폴리오</h2>
        <a href="https://mymy-beige.vercel.app">LIM</a>
        <h2>양유나 개인 포트폴리오</h2>
        <a href="https://myblog-opal.vercel.app">YANG</a>
      </div>
    </Layout>
  )
}
