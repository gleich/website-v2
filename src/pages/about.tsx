import Center from '@components/Center'
import Meta from '@components/Meta'
import time from '@data/time'
import { NextPage } from 'next'
import { useState } from 'react'
import useInterval from 'use-interval'
import Link from 'next/link'
import Image from 'next/image'
import QNA from '@components/pages/about/QNA'

const About: NextPage = (): JSX.Element => {
  const [codingFor, setCodingFor] = useState(0)

  useInterval(() => {
    setCodingFor(time.yearsSince(time.startedCoding))
  }, 10)

  return (
    <>
      <style jsx>
        {`
          main {
            margin: 0 20px;
            margin-bottom: 50px;
          }

          .img {
            position: relative;
            -moz-user-select: -moz-none;
            -khtml-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
            user-select: none;
            border-radius: 50%;
            padding-top: 50px;
            padding-bottom: 20px;
          }

          h3 {
            padding-top: 30px;
            text-decoration: underline;
          }

          main {
            max-width: 800px;
          }

          .coding-for {
            display: inline-block;
            width: 127px;
          }

          .answer {
            margin-left: 40px;
          }

          .contact {
            margin-top: 20px;
          }
        `}
      </style>
      <Meta title="About Me" description="About Matt Gleich" />
      <Center root>
        <main>
          <div className="img">
            <Image src="/images/me.jpg" width="266px" height="286px" />
          </div>
          <p>
            Hello and welcome to my website! For the past{' '}
            <span className="coding-for">
              {codingFor.toString().substring(0, 11)}
            </span>{' '}
            years I&apos;ve been exploring the art of writing useful, clean, and
            efficient applications. Almost all of my personal work is over on my{' '}
            <a
              href="https://github.com/gleich"
              target="_blank"
              rel="noreferrer"
            >
              GitHub page
            </a>
            . Outside of writing software I enjoy{' '}
            <Link href="/wip">photography</Link> &{' '}
            <a
              href="https://www.strava.com/athletes/30124266"
              target="_blank"
              rel="noreferrer"
            >
              cycling
            </a>
            .
          </p>
          <h3>Contact</h3>
          <p className="contact">
            I would love to hear from you! <br /> The best way to get in contact
            with me is via <a href="mailto:email@mattglei.ch">email</a> or{' '}
            <a href="https://twitter.com/matt_gleich">twitter</a>.
          </p>
          <h3>Q&A</h3>
          <QNA question="When did you start coding?">
            <p>
              I started programming on my high school&apos;s robotics team my
              freshman year of high school. I started as the lead computer
              vision programmer and worked on{' '}
              <a href="https://github.com/Team-501-The-PowerKnights/Vision2019">
                {' '}
                software
              </a>{' '}
              to help guide our robot using a camera.
            </p>
          </QNA>
          <QNA question="Why do you code?">
            <p>
              Coding is this rate activity where there is no ceiling. No matter
              how much work you put in there will always be more to learn. This
              ability to be able to learn forever and create almost anything I
              want is why I code.
            </p>
          </QNA>
          <QNA question="What type of software do you write?">
            <p>
              Because I don&apos;t need to focus on something right now
              I&apos;ve kinda been jumping all over the place. I&apos;ve done
              some work with mobile apps, web apps, backend services, and CLIs
              (command line interfaces). Most of my time has been on the backend
              and with CLIs but I also love working on the frontend. Checkout
              some of my work on my{' '}
              <a
                href="https://github.com/gleich"
                target="_blank"
                rel="noreferrer"
              >
                GitHub account.
              </a>
            </p>
          </QNA>
          <QNA question="What type of photos do you take?">
            <p>
              I&apos;ve been taking macro, landscape, and travel photos for the
              past 5 years. Before coding this was my passion in life. Even
              though I don&apos;t spend as much time on it in recent years I
              still love photography and love to bring my camera whenever I
              travel.
            </p>
          </QNA>
        </main>
      </Center>
    </>
  )
}

export default About
