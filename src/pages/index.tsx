// pages/index.tsx
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Convem</title>
        <meta name="description" content="site-generator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/convem.ico" />
      </Head>
    
     <div>
     <h1>HOME</h1>
      <h1>Selecione um layout:</h1>
      <ul>
        <li>
          <Link href="/layout1">
            <span>Layout 1</span>
          </Link>
        </li>
        <li>
          <Link href="/layout2">
            <span>Layout 2</span>
          </Link>
        </li>
        <li>
          <Link href="/layout3">
            <span>Layout 3</span>
          </Link>
        </li>
        <li>
          <Link href="/layout4">
            <span>Layout 4</span>
          </Link>
        </li>
      </ul>
    </div>
    </>
  )
}
