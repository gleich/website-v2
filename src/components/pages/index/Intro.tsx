import Section from '@components/pages/index/Section'
import time from '@data/time'
import { useState } from 'react'
import useInterval from 'use-interval'

const Intro = (): JSX.Element => {
  const [codingFor, setCodingFor] = useState(0)

  useInterval(() => {
    setCodingFor(time.yearsSince(time.startedCoding))
  }, 10)

  return (
    <>
      <style jsx>
        {`
          .wave {
            animation-name: wave-animation;
            animation-duration: 2.5s;
            animation-iteration-count: infinite;
            transform-origin: 70% 70%;
            display: inline-block;
            padding-right: 7px;
          }

          .coding-for {
            font-family: 'IBM Plex Mono';
            font-size: 1.2rem;
          }

          /* Used from https://jarv.is/notes/css-waving-hand-emoji/ */
          @keyframes wave-animation {
            0% {
              transform: rotate(0deg);
            }
            10% {
              transform: rotate(14deg);
            }
            20% {
              transform: rotate(-8deg);
            }
            30% {
              transform: rotate(14deg);
            }
            40% {
              transform: rotate(-4deg);
            }
            50% {
              transform: rotate(10deg);
            }
            60% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(0deg);
            }
          }
        `}
      </style>
      <Section name="intro">
        <p>
          <span className="wave">👋🏼</span> Hey, I&apos;m Matt Gleich. For the
          past{' '}
          <span className="coding-for">
            {codingFor.toString().substring(0, 11)}
          </span>{' '}
          years I’ve been wondering around the world of programming. Outside of
          programming enjoy photography, and cycling. You can find out more
          about me on my about me page.
        </p>
      </Section>
    </>
  )
}

export default Intro
