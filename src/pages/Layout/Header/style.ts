import { css } from '@emotion/css';
import styled from '@emotion/styled';

export const HeaderWrap = styled.div`
  padding: 1.125em 2.778%;

  .title-container {
    margin-top: 0.35em;
    .page-title {
      text-align: center;
      font-size: 2.375em;
      line-height: 1.342;
    }
    .date {
      font-size: 12px;
      line-height: 1.5;
      font-weight: 700;
      padding-bottom: 2px;
    }
  }
`


export const TopNavWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .nav-left {
    display: flex;
    align-items: center;
  }
`

export const SearchWrap = css`
  display: flex;
  align-items: center;
  font-weight: 900;
  cursor: pointer;
  .search-svg {
    font-size: 12px;
    height: 12px;
    width: 12px;
    font-weight: 900;
  }
  .search-title {
    font-family: "PT Sans", sans-serif;
    font-size: 12px;
    margin-left: 6px;
    font-weight: 700;
  }
`

export const MenuListWrap = css`
  display: flex;
  align-items: center;

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
  }
`


export const ShareInfoWrap = css`
  display: inline-flex;
  align-items: center;
  .share-item {
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    cursor: pointer;
    border: 1px solid #000;
    border-radius: 3px;

    &:hover {
      opacity: .5;
    }
    .share-icon {
      font-size: 12px;
      width: 14px;
      height: 14px;
    }
  }
`