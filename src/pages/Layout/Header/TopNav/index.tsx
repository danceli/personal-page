import Menu from '@/components/Menu';
import { MenuListWrap, TopNavWrap } from '../style';
import SearchArticle from './SearchArticle/ index';
import { MenuConfig } from "@/config/menu";
import ShareInfo from './ShareInfo';
const TopNav = () => {
  return (
    <TopNavWrap>
      <div className='nav-left'>
        <SearchArticle />
        <Menu menus={MenuConfig} classNames={MenuListWrap}/>
      </div>
      <div className="page-info">
        <ShareInfo />
      </div>
    </TopNavWrap>
  )
}

export default TopNav;