import Image from "next/image";
import Link from "next/link";

import { HiOutlineArrowNarrowRight } from "../Icons";

const About = () => {
  return (
    <div className="font-sen my-8 flex flex-row items-center justify-between px-3">
      <div>
        <p
          className="text-3xl font-bold text-white"
          style={{ color: "#2ecc71" }}
        >
          Mayank
        </p>
        <p className="mt-1 text-lg font-medium text-gray-300">
          Software Developer
        </p>

        <p className="mt-4 text-gray-400">
          - Currently I am building Dapps and I have a good grasp in Smart
          Contract development. <br /> - I am helping people learn about
          blockchain, web3, NFT, DeFi.
        </p>

        {/* <Link href="https://blog.anurag.tech" passHref>
          <a
            className="font-jost mt-4 flex cursor-pointer flex-row items-center gap-1 text-xl text-gray-400 duration-100 hover:ml-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read my Blog
            <HiOutlineArrowNarrowRight />
          </a>
        </Link> */}

        {/* <Link href="https://sponsor.anurag.tech" passHref>
          <a
            className="font-jost mt-4 flex cursor-pointer flex-row items-center gap-1 text-xl text-gray-400 duration-100 hover:ml-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Love my work? Sponsor me!
            <HiOutlineArrowNarrowRight />
          </a>
        </Link> */}
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
  );
};

export default About;
