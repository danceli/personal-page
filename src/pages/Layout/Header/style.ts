import { css } from '@emotion/css';
import styled from '@emotion/styled';

export const HeaderWrap = styled.div`
  padding: 1.125em 2.778%;
`


export const TopNavWrap = styled.div`
  display: flex;
  align-items: center;
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