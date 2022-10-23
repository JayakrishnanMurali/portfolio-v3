import { NextScript } from 'next/document'
import Head from 'next/head'

export default function Meta() {
  return (
    <Head>
      <NextScript
        defer
        data-domain="shreyas.design"
        src="https://plausible.io/js/plausible.js"
      ></NextScript>
    </Head>
  )
}
