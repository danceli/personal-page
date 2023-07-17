import { SearchWrap } from "../../style";
import { ReactComponent as SearchSvg } from '@/assets/icons/search.svg';


const SearchArticle = () => {
  return (
    <div className={SearchWrap}>
      <SearchSvg className="search-svg" />
      <span className="search-title">SEARCH</span>
    </div>
  )
}


export default SearchArticle;