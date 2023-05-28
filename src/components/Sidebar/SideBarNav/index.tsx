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

      <NavSection title="Apostas">
        <NavLink href="/dashboard/products" icon={Box}>
          Minhas Apostas
        </NavLink>

        <NavLink href="/dashboard/create" icon={FolderPlus}>
          Estatistica
        </NavLink>
        <NavLink href="/dashboard/create" icon={FolderPlus}>
          Metodos
        </NavLink>
      </NavSection>

      <NavSection title="Metodos">
        <NavLink href="/dashboard/products" icon={Box}>
          Meus Metodos
        </NavLink>

        <NavLink href="/dashboard/create" icon={FolderPlus}>
          Metodos
        </NavLink>
        <NavLink href="/dashboard/create" icon={FolderPlus}>
          Metodos
        </NavLink>
      </NavSection>
    </Stack>
  );
}
