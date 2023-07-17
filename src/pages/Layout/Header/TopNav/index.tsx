import Menu from '@/components/Menu';
import { MenuListWrap, TopNavWrap } from '../style';
import SearchArticle from './SearchArticle/ index';
import { MenuConfig } from "@/config/menu";
const TopNav = () => {
  return (
    <TopNavWrap>
      <SearchArticle />
      <Menu menus={MenuConfig} classNames={MenuListWrap}/>
    </TopNavWrap>
  )
}

export default TopNav;