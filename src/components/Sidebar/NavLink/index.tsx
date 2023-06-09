import { Icon, Link as ChakraLink, Text } from "@chakra-ui/react";
import { ActiveLink } from "@/components/ActiveLink";
import { ElementType } from "react";
import { LinkProps } from "@chakra-ui/react";

interface INavLinkProps extends LinkProps {
  icon: ElementType;
  children: string;
  href: string;
}

export default function NavLink({
  href,
  icon,
  children,
  ...rest
}: INavLinkProps): JSX.Element {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
