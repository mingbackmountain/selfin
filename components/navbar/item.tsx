import Link from "next/link"

import { NavLink } from "./styles/navbar"

interface NavbarItemProps {
  href: string
  linkName: string
}

export const NavbarItem: React.FC<NavbarItemProps> = ({ linkName, href }) => {
  return (
    <Link href={href}>
      <NavLink>{linkName}</NavLink>
    </Link>
  )
}
