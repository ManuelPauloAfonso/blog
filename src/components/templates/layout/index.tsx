import Navbar from "@/components/organisms/navbar";
import Head from "next/head";
import { ReactNode } from "react";
import Container from "../container";
import Footer from "@/components/organisms/footer";
import minimal from "../../../../public/assets/min.svg";

type Props = {
  title: string;
  children: ReactNode;
};
export default function Layout({ title, children }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:image" content="/assets/min.svg" />
      </Head>
      <Navbar />
      <Container>
        {children}
        <Footer />
      </Container>
    </>
  );
}
