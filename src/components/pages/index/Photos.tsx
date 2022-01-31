import Image from 'next/image'
import Section from './Section'
import MG8_0021 from '@data/photos/MG8_0021.jpg'
import MG8_0296 from '@data/photos/MG8_0296.jpg'
import MG8_0431 from '@data/photos/MG8_0431.jpg'
import MG8_4720 from '@data/photos/MG8_4720.jpg'
import MG8_5124 from '@data/photos/MG8_5124.jpg'
import MG8_5433 from '@data/photos/MG8_5433.jpg'
import { nanoid } from 'nanoid'
import Route from '@components/Route'

interface Photo {
  data: StaticImageData
  alt: string
  height: number
  width: number
}

const Photos = (): JSX.Element => {
  const photos: Photo[] = [
    {
      data: MG8_5433,
      alt: 'Fuzzy Insect',
      width: 1056,
      height: 705,
    },
    {
      data: MG8_0021,
      alt: 'Beach in Acadia National Park',
      width: 600,
      height: 899,
    },
    {
      data: MG8_0296,
      alt: 'Ladybug',
      width: 600,
      height: 899,
    },
    {
      data: MG8_0431,
      alt: 'Dragonfly',
      width: 744,
      height: 899,
    },
    {
      data: MG8_4720,
      alt: 'Architecture',
      width: 600,
      height: 899,
    },
    {
      data: MG8_5124,
      alt: 'Yellow Flower',
      width: 1056,
      height: 705,
    },
  ]
  return (
    <>
      <Section name="photos">
        <style jsx>
          {`
            .photos {
              display: flex;
              justify-content: center;
              align-items: center;
              flex-wrap: wrap;
              gap: 20px;
            }
          `}
        </style>
        <div className="photos">
          {photos.map((i) => (
            <Image
              src={i.data}
              height={i.height}
              width={i.width}
              key={nanoid()}
              placeholder="blur"
              alt={i.alt}
            />
          ))}
          <p>
            View more in my{' '}
            <Route href="https://lightroom.adobe.com/shares/e96b417d28384fe7b26b54b8809f5d08">
              library
            </Route>
          </p>
        </div>
      </Section>
    </>
  )
}

export default Photos
