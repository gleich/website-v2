const Glow = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <>
    <style jsx>
      {`
        .glow {
          animation: light-up 5s ease-in 4s infinite;
        }

        @keyframes light-up {
          0% {
            text-shadow: none;
          }

          50% {
            text-shadow: 6px 4px 30px rgba(255, 255, 255, 0.6);
          }

          100% {
            text-shadow: none;
          }
        }

        @media (prefers-color-scheme: light) {
          .glow {
            animation: none;
          }
        }
      `}
    </style>
    <div className="glow">{children}</div>
  </>
)

export default Glow
