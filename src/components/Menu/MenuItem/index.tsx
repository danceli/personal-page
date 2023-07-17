import { IMenu } from "@/config/menu";

type Props = {
  data: IMenu;
}
const MenuItem: React.FC<Props> = ({ data }) => {
  return (
    <div className="menu-item">
      <span className="menu-title">{data?.title}</span>
    </div>
  )
}

export default MenuItem