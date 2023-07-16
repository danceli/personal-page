import Content from "./Content";
import Header from "./Header";
import SiderLeft from "./Sider/left";
import SiderRight from "./Sider/right";
import { LayoutWrap } from "./style";

const Layout = () => {
  return (
    <LayoutWrap>
      <Header />
      <div className="content-wrap">
        <SiderLeft />
        <Content />
        <SiderRight />
      </div>
    </LayoutWrap>
  )
}

export default Layout;