import { css } from '@emotion/css';

export const MenuWrap = css`
  display: flex;
  align-items: center;
  height: 18px;
  line-height: 1.5;
  .sub-menu {
    display: inline-flex;
    align-items: center;
    position: relative;
    height: 100%;
    .sub-menu-title {
      text-transform: uppercase;
      letter-spacing: 0.03em;
      margin-left: 8px;
      margin-right: 3px;
      cursor: pointer;
      transition: all ease 0.3s;
      &:hover {
        color: #666666;
      }
    }
    .sub-menu-list {
      display: none;
    }

    .arrow-down {
      font-size: 12px;
      width: 1em;
      height: 1em;
    }
  }
  .menu-item {
    height: 100%;
    line-height: 1.5em;
    .menu-title {
      display: inline-block;
      height: 100%;
    }
  }
`;
