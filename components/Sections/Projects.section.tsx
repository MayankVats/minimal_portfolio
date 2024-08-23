import React from "react"

import Link from "next/link"

const Projects: React.FC = () => {
  return (
    <div className="my-16 px-3 font-sen" id="projects">
      <p className="text-3xl font-bold text-white" style={{ color: "#2ecc71" }}>
        Featured Projects
      </p>

      <div className="my-8 flex flex-col items-center justify-center gap-10 sm:flex-row">
        <Link href="https://omnifood-app-mv.netlify.app" passHref>
          <a
            className="h-[7rem] w-[14rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#d35400] to-[#f1c40f] p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
              <p className="text-xl font-semibold">Omnifood</p>
              <p>Food ordering app</p>
            </div>
          </a>
        </Link>

        <Link href="https://flush.com" passHref>
          <a
            className="h-[7rem] w-[14rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#8e44ad] via-[#95a5a6] to-[#9b59b6] p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
              <p className="text-xl font-semibold">Flush.com</p>
              <p>Crypto based gambling platform</p>
            </div>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Projects
