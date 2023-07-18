import { IMenu } from "@/config/menu";
import { useNavigate } from "react-router-dom";
type Props = {
  data: IMenu;
  activePath: string;
}
const MenuItem: React.FC<Props> = ({ data, activePath = '' }) => {

  const navigate = useNavigate();

  return (
    <div className="menu-item" style={{background: data?.path === activePath ? '#f3f3f3' : 'none' }}>
      <span className="menu-title" onClick={() => navigate(data?.path)}>{data?.title}</span>
    </div>
  )
}

export default MenuItem