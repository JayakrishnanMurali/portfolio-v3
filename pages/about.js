import Link from 'next/link'
import Layout from '@/components/layout'
import Head from 'next/head'
import { useTheme } from 'next-themes'
export default function Index() {
  const { theme } = useTheme()
  const rightArrowLink = `https://s.svgbox.net/hero-solid.svg?ic=arrow-right&fill=${
    theme === 'dark' ? '000' : 'fff'
  }`

  const getYearsOfExperience = () => {
    const ogDate = new Date('8/31/2020')
    const currDate = new Date(Date.now())
    const diffTime = Math.abs(currDate - ogDate)
    const exp = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return Math.round(exp / 365)
  }

  return (
    <>
      <Layout>
        <Head>
          <title>About</title>
          <meta rel="og:description" content="About Me | Jayakrishnan M" />
          <meta name="description" content="About Me | Jayakrishnan M" />
        </Head>
        <h1 className="page-title-design">About</h1>
        <div className="mt-6 text-lg font-normal text-black lg:mt-16">
          <p>
            I am a <b>Software Developer</b> with{' '}
            {`${getYearsOfExperience()}+ `}
            years of professional experience on full-stack development. My
            personal frontend library of choice would be{' '}
            <a
              className="cursor-pointer general-link"
              href="https://reactjs.org/"
              rel="noopener"
              target="_blank"
            >
              React js
            </a>{' '}
            or{' '}
            <a
              className="cursor-pointer general-link"
              href="https://nextjs.org/"
              rel="noopener"
              target="_blank"
            >
              Next js.
            </a>{' '}
            For the backend I mainly prefers{' '}
            <a
              className="cursor-pointer general-link"
              href="https://www.django-rest-framework.org/"
              rel="noopener"
              target="_blank"
            >
              Django Rest Framework
            </a>{' '}
            or{' '}
            <a
              className="cursor-pointer general-link"
              href="https://nodejs.org/en/docs/guides/"
              rel="noopener"
              target="_blank"
            >
              Node js
            </a>
            . Currently I am occupied with learning Go{' '}
            <a
              className="cursor-pointer general-link"
              href="https://go.dev/"
              rel="noopener"
              target="_blank"
            >
              (GoLang)
            </a>
            .
          </p>
          <br />
          <p>
            When I’m not working, I like to read or write blogs mostly tech
            related. You can also find me binging an anime or some tv shows on
            Netflix.
          </p>
          <br />
          <p>
            Feel free to get in touch with me for any doubts, questions or a
            quick chat. I will try to get back to you within a day :)
          </p>
        </div>
        <div className="mt-6">
          <Link
            href="/Shreyas_Gupta_Design_Resume-compressed.pdf" // Add resume later
            passHref={true}
          >
            <button className="flex items-center p-4 mt-4 font-medium text-white transition duration-300 bg-black border-2 border-black cursor-pointer dark:bg-white dark:text-black rounded-xl hover:opacity-80">
              <div className="pr-2">My Resume</div>
              <div>
                <img
                  src={rightArrowLink}
                  width="20"
                  height="20"
                  alt="right arrow icon"
                />
              </div>
            </button>
          </Link>
        </div>
      </Layout>
    </>
  )
}
