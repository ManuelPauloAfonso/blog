import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/assets/Mafonso .svg";

export default function Logo() {
  return (
    <div>
      <Link href={"/"}>
        <Image src={logo} alt="logo user" />
      </Link>
    </div>
  );
}
