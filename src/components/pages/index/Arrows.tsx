import { motion, useViewportScroll } from 'framer-motion'
import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'

const Arrows = (): JSX.Element => {
  const arrows: JSX.Element[] = []
  const { scrollYProgress } = useViewportScroll()
  const [opacity, setOpacity] = useState('100%')

  useEffect(() => {
    return scrollYProgress.onChange((v) => setOpacity(`${30 - v * 100}%`))
  }, [scrollYProgress])

  for (let i = 0; i < 6; i++) {
    arrows.push(
      <motion.div
        key={nanoid()}
        initial={opacity === '100%' ? { opacity: '0%', rotate: '180deg' } : {}}
        animate={opacity === '100%' ? { opacity: '100%', rotate: '0deg' } : {}}
        transition={{ duration: 2, delay: i * 0.2 + 15 }}
        style={{ opacity }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </motion.div>
    )
  }
  return (
    <>
      <style jsx>
        {`
          .arrowSet {
            display: flex;
            flex-direction: row;
            bottom: 20px;
            position: absolute;
          }

          @media screen and (max-height: 700px) {
            .arrowSet {
              display: none !important;
            }
          }
        `}
      </style>
      <div className="arrowSet">{arrows}</div>
    </>
  )
}

export default Arrows
