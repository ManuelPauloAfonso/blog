import { useState } from "react";
import classNames from "classnames";
import NextLink from "next/link";

type props = {
  title: string;
  route: string;
};

export default function Link({ title, route }: props) {
  const [clicked, setCliked] = useState(false);

  const ativeClasses = classNames("text-blue-500", clicked && "font-bold");
  return (
    <NextLink className="hover:text-orange-400" href={route}>
      {title}
    </NextLink>
  );
}
