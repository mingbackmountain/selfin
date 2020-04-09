import { RedLine } from "./styles/promotion"

import { MenuItemProps } from "./types"

export const MenuItem: React.FC<MenuItemProps> = props => (
  <div className={props.isSelected ? "selected" : undefined}>
    {props.children}
    {props.isSelected && <RedLine />}
  </div>
)
