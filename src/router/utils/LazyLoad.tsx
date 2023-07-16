import { LazyExoticComponent, ReactNode, Suspense, CSSProperties } from 'react';
import BounceLoader from 'react-spinners/BounceLoader';


const override: CSSProperties = {
  display: "flex",
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%'
};
const LazyLoad = (Comp: LazyExoticComponent<any>): ReactNode => {
  return <Suspense
    fallback={
      <BounceLoader
        color='#ccc'
        size={90}
        cssOverride={override}
      />
    }
  >
    <Comp />
  </Suspense>;
}


export default LazyLoad;