import Layout from '@/components/layout'
import WritingsList from '@/components/writinglist'
import { WRITING_OG_IMAGE_URL } from '@/lib/constants'
import Head from 'next/head'

export default function Index(posts) {
  return (
    <>
      <Layout>
        <Head>
          <title>Writings</title>
          <meta rel="og:description" content="Writings by Shreyas Gupta" />
          <meta property="og:image" content={WRITING_OG_IMAGE_URL} />
          <meta name="description" content="Writings by Shreyas Gupta" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@shreyasjpg" />
          <meta name="twitter:title" content="Writings | Shreyas.design" />
          <meta
            name="twitter:description"
            content="Writings by Shreyas Gupta"
          />
          <meta name="twitter:image" content={WRITING_OG_IMAGE_URL} />
        </Head>
        <h1 className="page-title-design">Writings</h1>
        <WritingsList className="mt-6 lg:mt-16" posts={posts} />
      </Layout>
    </>
  )
}
