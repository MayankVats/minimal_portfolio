import Image from "next/image"
import Link from "next/link"

import { HiOutlineArrowNarrowRight } from "../Icons"

const About = () => {
  return (
    <div className="my-8 flex flex-row items-center justify-between px-3 font-sen">
      <div>
        <p
          className="text-3xl font-bold text-white"
          style={{ color: "#2ecc71" }}
        >
          Mayank Vats
        </p>
        <p className="mt-1 text-lg font-medium text-gray-300">
          Full-stack Engineer | Focus on Frontend Engineering
        </p>

        <p
          className="mt-4 w-2/3 text-gray-400"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            lineHeight: "18px"
          }}
        >
          <p style={{ display: "flex", gap: "10px" }}>
            <div>-</div>
            <div>
              Startup background with experience in backend, frontend, design,
              and tech leadership. Now focusing on transitioning to Frontend
              Engineering.
            </div>
          </p>
          <p style={{ display: "flex", gap: "10px" }}>
            <div>-</div>
            <div>
              Proficient in React, Express, GraphQL, Solidity, and Web3.
            </div>
          </p>
          <p style={{ display: "flex", gap: "10px" }}>
            <div>-</div>
            <div>
              Passionate about design with a strong growth mindset, quickly
              learning new technologies to create efficient solutions.
            </div>
          </p>
        </p>
      </div>

      <div>
        <Image
          src="/assests/avatar.png"
          width="112"
          height="112"
          className="rounded-full"
          alt="avatar"
        />
      </div>
    </div>
  )
}

export default About
