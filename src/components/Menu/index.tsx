import { IMenu } from "@/config/menu";
import SubMenu from "./SubMenu";
import MenuItem from "./MenuItem";
import { MenuWrap } from "./style";

 
type Props = {
  classNames?: string;
  menus: IMenu[];
  activePath?: string;
}
const Menu: React.FC<Props> = (props) => {
  const { menus, classNames, activePath } = props;

  const renderMenu = (menuList: IMenu[], activePath: string) => {
    return menuList?.map((menu: IMenu) => (
      (menu?.children && menu?.children?.length > 0) ? (
        <SubMenu key={menu?.path} title={menu?.title}>
          { renderMenu(menu?.children, activePath) }
        </SubMenu>
      ) : (
        <MenuItem data={menu} key={menu?.path} activePath={activePath} />
      )
    ))
  }
  return (
    <div className={[MenuWrap, classNames].join(' ')}>
      {renderMenu(menus, activePath)}
    </div>
  )
}


export default Menu;