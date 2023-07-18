import Navigation from './Navigation';
import { HeaderWrap } from './style';
import TopNav from './TopNav';
const Header = () => {
  return (
   <HeaderWrap>
      <TopNav />
      <div className="title-container">
        <div className='page-title'>HuaHua`s Learn Road</div>
        <div className="date">
          {new Date().toDateString()}
        </div>
      </div>
      <Navigation />
   </HeaderWrap>
  )
}

export default Header;