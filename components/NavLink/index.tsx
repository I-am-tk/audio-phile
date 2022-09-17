import React from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
function NavLink({
  href,
  children,
  className = "",
  active = "",
  exact = true,
  onClick,
  ...rest
}: React.PropsWithChildren<LinkProps> & {
  className?: string;
  active?: string;
  exact?: boolean;
  onClick?: () => void;
}) {
  const { asPath } = useRouter();
  const isActive = exact ? href === asPath : asPath.startsWith(href.toString());
  return (
    <Link href={href}>
      <a className={`${className} ${isActive ? active : ""}`} {...rest}>
        {children}
      </a>
    </Link>
  );
}

export default NavLink;
