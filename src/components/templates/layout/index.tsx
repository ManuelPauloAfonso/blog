import Navbar from "@/components/organisms/navbar";
import Head from "next/head";
import { ReactNode } from "react";
import Container from "../container";
import Footer from "@/components/organisms/footer";

type Props = {
  title: string;
  children: ReactNode;
};
export default function Layout({ title, children }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <Container>
        {children}
        <Footer />
      </Container>
    </>
  );
}
