import { ReactComponent as ArrowDownSvg } from "@/assets/icons/arrow-down.svg";

const SubMenu = (props: any) => {
  const { children, title } = props;
  return (
    <div className="sub-menu">
      <span className="sub-menu-title">{title}</span>
      <ArrowDownSvg className="arrow-down" />
      <div className="sub-menu-list">
        {children}
      </div>
    </div>
  )
}

export default SubMenu;