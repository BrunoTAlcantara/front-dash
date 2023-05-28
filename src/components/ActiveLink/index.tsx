import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { cloneElement } from "react";
import { LinkProps } from "next/link";

import { ReactElement } from "react";

interface IActiveLinkProps extends LinkProps {
  children: ReactElement;
  shouldMatchExactHref?: boolean;
}

export function ActiveLink({
  children,
  shouldMatchExactHref,
  ...rest
}: IActiveLinkProps): JSX.Element {
  const { asPath } = useRouter();

  let isActive = false;

  if (shouldMatchExactHref && (asPath === rest.href || asPath === rest.as)) {
    isActive = true;
  }

  if (
    !shouldMatchExactHref &&
    (asPath.startsWith(String(rest.href)) ||
      asPath.startsWith(String(rest.href)))
  ) {
    isActive = true;
  }
  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? "green.400" : "gray.50",
      })}
    </Link>
  );
}
