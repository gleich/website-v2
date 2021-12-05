import Image from 'next/image'
import Section from './Section'
import MG8_6604 from '@data/photos/MG8_6604.jpg'
import MG8_0021 from '@data/photos/MG8_0021.jpg'
import MG8_2365 from '@data/photos/MG8_2365.jpg'
import MG8_3764 from '@data/photos/MG8_3764.jpg'
import MG8_5338 from '@data/photos/MG8_5338.jpg'
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
      data: MG8_6604,
      alt: 'Mountain in Switzerland',
      height: 524.5,
      width: 350,
    },
    {
      data: MG8_0021,
      alt: 'Beach in Acadia National Park, Maine',
      height: 524.744,
      width: 350,
    },
    {
      data: MG8_2365,
      alt: 'Misty rocks in Acadia National Park, Maine',
      height: 470,
      width: 720,
    },
    {
      data: MG8_3764,
      alt: 'CRICKET',
      height: 470,
      width: 720,
    },
    {
      data: MG8_5338,
      alt: 'Boat on super clear and teal water',
      height: 470,
      width: 720,
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
