import { Html, Head, Main, NextScript } from "next/document";
{
  /* 
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  variable: "--poppins-font",
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

*/
}

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
