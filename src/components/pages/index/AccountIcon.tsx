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
            width: clamp(40px, 4.5vw, 50px);
            height: clamp(40px, 4.5vw, 50px);
            position: relative;
          }

          .icon:hover {
            animation: shake 0.5s ease;
          }

          @keyframes shake {
            0% {
              transform: 0;
            }

            50% {
              transform: rotate(20deg);
            }

            0% {
              transform: 0;
            }
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
