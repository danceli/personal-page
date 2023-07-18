import { Outlet } from "react-router-dom";
import { ContentWrap } from "../style";

const Content = () => {
  return (
    <div className={ContentWrap}> 
      <Outlet />
    </div>
  )
}

export default Content;