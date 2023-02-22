import { FC } from "react";
import Link, { LinkProps } from "next/link";

interface IAppLink extends LinkProps {
  children: React.ReactNode;
  className?: string;
}

const CustomLink: FC<IAppLink> = ({ children, href, className }) => {
  return (
    <Link href={href}>
      <a className={className}>{children}</a>
    </Link>
  );
};

export default CustomLink;
