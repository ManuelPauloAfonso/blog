import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export default function Container({ children }: Props) {
  return <div className="">{children}</div>;
}
