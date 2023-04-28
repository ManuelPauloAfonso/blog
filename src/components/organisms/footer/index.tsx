import Image from "next/image";
import social1 from "../../../../public/assets/insta.svg";
import social2 from "../../../../public/assets/linkedin.svg";
import social3 from "../../../../public/assets/twiiter.svg";

export default function Footer() {
  return (
    <footer className="my-10">
      <div className="flex justify-center items-center">
        <p>© 2023 built with ❤️ by Manuel Afonso</p>
      </div>
      <div className="flex justify-center items-center mt-5 gap-4">
        <Image src={social1} alt="social" />
        <Image src={social2} alt="social2" />
        <Image src={social3} alt="social3" />
      </div>
    </footer>
  );
}
