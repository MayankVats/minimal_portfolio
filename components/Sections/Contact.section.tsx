import { AiOutlineLinkedin } from "react-icons/ai";
import {
  BsSpotify,
  MdEmail,
  AiOutlineGithub,
  AiOutlineTwitter,
  FaDiscord,
} from "../Icons";

import { Icon } from "../Misc/Icon.component";

const Contact = () => {
  return (
    <div className="font-sen px-3" id="contact">
      <p className="text-3xl font-bold text-white" style={{ color: "#2ecc71" }}>
        Get in touch
      </p>

      <div className="my-8 flex flex-row justify-center gap-x-4">
        <Icon icon={<AiOutlineGithub />} url="https://github.com/MayankVats" />

        <Icon
          icon={<AiOutlineTwitter />}
          url="https://twitter.com/_MayankVats"
        />

        <Icon
          icon={<AiOutlineLinkedin />}
          url="https://www.linkedin.com/in/mayankvats011/"
        />

        <Icon icon={<MdEmail />} url="mailto:vats.2610@gmail.com" />
      </div>
    </div>
  );
};

export default Contact;
