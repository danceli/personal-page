import { IMenu } from "@/config/menu";
import SubMenu from "./SubMenu";
import MenuItem from "./MenuItem";
import { MenuWrap } from "./style";

 
type Props = {
  classNames?: string;
  menus: IMenu[];
}
const Menu: React.FC<Props> = (props) => {
  const { menus, classNames } = props;

  const renderMenu = (menuList: IMenu[]) => {
    return menuList?.map((menu: IMenu) => (
      (menu?.children && menu?.children?.length > 0) ? (
        <SubMenu key={menu?.path} title={menu?.title}>
          { renderMenu(menu?.children) }
        </SubMenu>
      ) : (
        <MenuItem data={menu} key={menu?.path} />
      )
    ))
  }
  return (
    <div className={[MenuWrap, classNames].join(' ')}>
      {renderMenu(menus)}
    </div>
  )
}


export default Menu;