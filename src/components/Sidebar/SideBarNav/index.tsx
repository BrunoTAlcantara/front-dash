import { Stack } from "@chakra-ui/react";

import { Gauge, GitMerge, User, Box, FolderPlus } from "lucide-react";

import NavLink from "../NavLink";
import NavSection from "../NavSection";

export function SideBarNav(): JSX.Element {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink href="/dashboard" icon={Gauge}>
          Dashboard
        </NavLink>

        <NavLink href="/dashboard/perfil" icon={User}>
          Perfil
        </NavLink>
      </NavSection>

      <NavSection title="Produtos">
        <NavLink href="/dashboard/products" icon={Box}>
          Produtos
        </NavLink>

        <NavLink href="/automation" icon={FolderPlus}>
          Novo Produto
        </NavLink>
      </NavSection>
    </Stack>
  );
}
