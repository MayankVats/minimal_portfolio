import React from "react";

import Link from "next/link";

const Projects: React.FC = () => {
  return (
    <div className="font-sen my-16 px-3" id="projects">
      <p className="text-3xl font-bold text-white" style={{ color: "#2ecc71" }}>
        Featured Projects
      </p>

      <div className="my-8 flex flex-col items-center justify-center gap-10 sm:flex-row">
        <Link href="https://elbanco.netlify.app/" passHref>
          <a
            className="h-[7rem] w-[14rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#D8B4FE] to-[#818CF8] p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-primary flex h-full w-full flex-col items-center justify-center rounded-lg px-2 text-center font-medium">
              <p className="text-xl font-semibold">El Banco</p>
              <p>Your safest decentralized bank</p>
            </div>
          </a>
        </Link>

        <Link href="https://wolfcoin.netlify.app/" passHref>
          <a
            className="h-[7rem] w-[14rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#FDE68A] via-[#FCA5A5] to-[#FECACA] p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-primary flex h-full w-full flex-col items-center justify-center rounded-lg px-2 text-center font-medium">
              <p className="text-xl font-semibold">WolfCoin</p>
              <p>An ERC20 Token Dapp</p>
            </div>
          </a>
        </Link>

        {/* <Link href="" passHref>
          <a
            className="h-[7rem] w-[14rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#FDE68A] via-[#FCA5A5] to-[#FECACA] p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-primary flex h-full w-full flex-col items-center justify-center rounded-lg px-2 text-center font-medium">
              <p className="text-xl font-semibold">UnitySig</p>
              <p>A multi sig wallet app.</p>
            </div>
          </a>
        </Link> */}
      </div>
    </div>
  );
};

export default Projects;
