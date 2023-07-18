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
    cursor: pointer;
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
    &:hover > .sub-menu-list {
      opacity: 1;
      visibility: visible;
      &::before {
        width: 100%;
      }
    }
    .sub-menu-list {
      position: absolute;
      opacity: 0;
      visibility: hidden;
      left: 0.66em;
      right: auto;
      padding: 0;
      min-width: 100%;
      width: auto;
      top: calc(100% + 4px);
      background: #fff;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
      transition:
        opacity 0.25s,
        visibility 0.25s,
        transform 0.15s;
      padding: 6px 36px 6px 24px;

      .menu-item {
        display: block;
        width: 100%;
        margin: 0;
        padding-top: 5px;
        
        .menu-title {
          display: inline-block;
          width: 100%;
          
        }
      }
      &::before {
        display: inline-block;
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 0;
        height: 1px;
        background-image: -webkit-linear-gradient(left, #000, #DCDCDC);
        background-image: linear-gradient(to right, #000, #DCDCDC);
        -webkit-transition: width 0.2s;
        transition: width 0.2s;
        clear: both;
      }
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
