import Head from 'next/head'
import Layout from '../components/Layout/'
import Inicio from './Inicio'

export default function Home() {
  return (
    <>
      <Layout>
        <Inicio/>
      </Layout>
    </>
  )
}
