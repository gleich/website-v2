import Image from 'next/image'

const AccountIcon = ({
  name,
  url,
  imagePath,
}: {
  name: string
  url: string
  imagePath: string
}): JSX.Element => {
  return (
    <>
      <style jsx>
        {`
          .icon {
            filter: invert(100%) saturate(0%);
            -moz-user-select: -moz-none;
            -khtml-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
            user-select: none;
            width: clamp(25px, 3vw, 45px);
            height: clamp(25px, 3vw, 45px);
            position: relative;
          }

          @media (prefers-color-scheme: light) {
            .icon {
              filter: none;
            }
          }
        `}
      </style>
      <div className="icon" title={name}>
        <a href={url} target="_blank" rel="noreferrer">
          <Image src={imagePath} layout="fill" alt={name} />
        </a>
      </div>
    </>
  )
}

export default AccountIcon