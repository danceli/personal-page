import { useEffect, useRef } from "react";
import { RevolverMapsWrap } from "./style";


const RevolverMaps = () => {
  const mapRef = useRef<null | HTMLElement>(null);

  useEffect(() => {
    const scriptEle = document.createElement('script');
    scriptEle.type = 'text/javascript';
    scriptEle.src = '//rf.revolvermaps.com/0/0/8.js?i=5noi22zawl8&amp;m=0&amp;c=ff0000&amp;cr1=ffffff&amp;f=arial&amp;l=33';
    scriptEle.setAttribute('async', 'async');
    if (mapRef?.current) {
      mapRef?.current.appendChild(scriptEle);
    }
  }, [])
  return (
    <div className={RevolverMapsWrap} ref={mapRef}>
    </div>
  )
}

export default RevolverMaps;