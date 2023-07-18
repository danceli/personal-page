import { css } from '@emotion/css';


export const NavigationWrap = css`
  padding: 0 5%;
  overflow: visible;
  text-align: center;
  border-top: solid 2px #000;
  border-bottom: solid 1px #DCDCDC;
`

export const MenuListWrap = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  .menu-item {
    height: 100%;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    margin-left: 8px;
    cursor: pointer;  
    transition: all ease .3s;
    &:hover {
      color: #666666;
    }

    & > .menu-title {
      padding: 12px;
      font-size: 13px;
    }

    
  }
  .sub-menu .sub-menu-title {
    font-size: 13px;
  }
  .sub-menu-list .menu-item .menu-title {
    padding: 0;
  }
`