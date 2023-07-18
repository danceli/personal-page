import Menu from "@/components/Menu";
import { NavigationWrap, MenuListWrap } from './style.ts';
import { MenuConfig } from '@/config/menu';
import { useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const pathname = location?.pathname;

  return (
    <div className={NavigationWrap}>
      <nav className="nav-inner">
      <Menu menus={MenuConfig} classNames={MenuListWrap} activePath={pathname}/>
      </nav>
    </div>
  )
}

export default Navigation;