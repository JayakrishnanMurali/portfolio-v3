import Layout from '@/components/layout'
import WritingList from '@/components/writinglist'
import { HOME_OG_IMAGE_URL } from '@/lib/constants'
import { useTheme } from 'next-themes'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { works } from '@/lib/works'
import { writtings } from '@/lib/writtings'

export default function Index() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null
  const mailSvgIcon = `https://s2.svgbox.net/hero-solid.svg?ic=mail&color=${
    theme === 'light' ? '000' : 'fff'
  }`

  function darkModeLinkStyleTag(linkText, link) {
    return (
      <a
        className={`cursor-pointer hover:opacity-70 font-medium transition duration-300 ${
          theme === 'dark' ? 'link-styling-dark' : 'link-styling'
        }`}
        href={link}
        rel="noopener"
        target="_blank"
      >
        {linkText}
      </a>
    )
  }
  return (
    <>
      <Layout>
        <Head>
          <meta property="twitter:card" content="summary_large_image"></meta>
          <meta property="twitter:site" content="@jkay_dev"></meta>
          <meta
            property="twitter:title"
            content="Jayakrishnan portfolio"
          ></meta>
          <meta property="twitter:url" content="http://localhost:3000/" />
          {/*  change later*/}
          <meta
            property="twitter:description"
            content="Selected Work and Writings by Jayakrishnan M"
          ></meta>
          <meta property="twitter:image" content={HOME_OG_IMAGE_URL}></meta>
          <meta property="og:image" content={HOME_OG_IMAGE_URL}></meta>
          <meta
            property="og:description"
            content="Selected Work and Writings by Jayakrishnan M"
          ></meta>
          <meta
            name="description"
            content="Selected Work and Writings by Jayakrishnan M"
          ></meta>
          <title>Jayakrishnan M</title>
          <meta property="og:title" content="Jayakrishnan M"></meta>
        </Head>
        <div className="mt-6 mb-12 lg:mt-24">
          <p className="mb-12 text-3xl font-semibold text-left text-black md:text-4xl lg:text-6xl dark:text-white">
            Hey, I'm Jayakrishnan M.
          </p>{' '}
          <p className="mt-8 text-xl font-normal text-left text-black md:text-xl lg:text-xl dark:text-white">
            I'm a software development engineer who loves building tools for
            productivity. Currently working as a full-stack developer at{' '}
            {darkModeLinkStyleTag('NeoITO', 'https://neoito.com/')}.
            <br />
            <br />I spend most of my free time watching movies, tv shows or
            animes. I have a dog, love talking about football, a huge fan of{' '}
            {darkModeLinkStyleTag(
              'Manchester United',
              'https://www.manutd.com/',
            )}{' '}
            and a lifelong stan of the{' '}
            {darkModeLinkStyleTag(
              'Cristiano Ronaldo',
              'https://www.instagram.com/cristiano/?hl=en',
            )}{' '}
            .
          </p>
          <div className="flex mt-2">
            <Link href="/about" passHref={true}>
              <button className="px-4 py-2 mt-4 mr-4 font-normal text-white transition duration-300 transform bg-black border-2 border-black cursor-pointer dark:bg-white dark:border-white dark:text-black rounded-xl hover:opacity-80">
                Know More
              </button>
            </Link>

            <Link href="mailto:jayakrishnan1012@gmail.com" passHref={true}>
              <button className="flex items-center px-4 py-2 mt-4 text-black transition duration-300 transform border-2 border-black cursor-pointer dark:border-white dark:text-white rounded-xl hover:opacity-70">
                <div className="pr-2">
                  <img
                    src={mailSvgIcon}
                    width="22"
                    height="22"
                    alt="twitter logo"
                  />
                </div>
                <div className="font-normal">Say hello</div>
              </button>
            </Link>
          </div>
        </div>

        <div className="mt-16">
          <div className="home-page-title">Some of my works</div>

          {works.map((work) => (
            <div key={work.id}>
              <div className="mb-20 group">
                <a target="_blank" href={work.hostedLink}>
                  <div className="overflow-hidden duration-500 transform cursor-pointer group-hover:shadow-xl hover:scale-100 rounded-xl">
                    <Image
                      src={work.coverImage}
                      alt="Cover image for playground section"
                      width={1600}
                      height={900}
                      layout="responsive"
                    />
                  </div>
                </a>

                <div className="mt-4">
                  <div className="flex gap-x-4 ">
                    <a target="_blank" href={work.hostedLink}>
                      <h3 className="mb-2 text-lg font-semibold leading-snug text-black cursor-pointer  hover:underline lg:text-xl dark:text-white">
                        {work.title}
                      </h3>
                    </a>
                    <a
                      href={work.gitHubLink}
                      key={work.gitHubLink}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <img
                        src={`https://s2.svgbox.net/social.svg?ic=github&color=${
                          theme === 'light' ? '000' : 'fff'
                        }`}
                        className="social-icons"
                      />
                    </a>
                  </div>
                  <p className="mb-2 text-base font-normal leading-snug text-black  lg:text-lg dark:text-white">
                    {work.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="">
          <div className="home-page-title">Selected Writings</div>
          <WritingList posts={writtings} />
          {!(writtings.length < 3) && (
            <Link href="/writings" passHref={true}>
              <button className="mt-4 text-black underline cursor-pointer dark:text-white">
                Read More
              </button>
            </Link>
          )}
        </div>
      </Layout>
    </>
  )
}
