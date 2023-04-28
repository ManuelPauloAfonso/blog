import Logo from "@/components/atoms/logo";
import social1 from "../../../../public/assets/insta.svg";
import social2 from "../../../../public/assets/linkedin.svg";
import social3 from "../../../../public/assets/twiiter.svg";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="flex justify-between p-7 bg-white shadow ">
      <Logo />
      <nav>
        <ul className="flex items-center gap-8">
          <li>Home</li>
          <li>Articles</li>
          <li>
            {" "}
            <Image src={social1} alt="social" />
          </li>
          <li>
            <Image src={social2} alt="social2" />
          </li>
          <li>
            {" "}
            <Image src={social3} alt="social3" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
