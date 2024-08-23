import { BsArrowRightShort } from "../Icons"

const Skills = () => {
  return (
    <div className="my-16 px-3 font-sen text-white" id="skills">
      <p className="text-3xl font-bold text-white" style={{ color: "#2ecc71" }}>
        Skills & Uses
      </p>

      <div className="text-md my-8 flex flex-col font-medium md:text-xl custom:text-lg">
        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">ReactJS</span>
          &nbsp;as my Frontend library
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">Typescript </span>
          &nbsp;as my main language
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">Tailwind CSS </span>
          &nbsp;CSS framework for faster prototyping
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">Solidity </span>
          &nbsp;for writing smart contracts
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">Hardhat </span>
          &nbsp;for smart contract development
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">Web3js </span>
          &nbsp;for blockchain integration
        </p>
      </div>

      <p className="text-lg font-medium text-slate-300">
        ...more skills include <span className="text-white">UI/UX</span>,{" "}
        <span className="text-white">Figma</span>,{" "}
        <span className="text-white">nodejs</span>,{" "}
        <span className="text-white">graphql (Apollo Client)</span>,{" "}
        <span className="text-white">expressjs </span>{" "}
      </p>
    </div>
  )
}

export default Skills
