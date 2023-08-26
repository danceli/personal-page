import { useEffect, useRef } from "react";
import { TypingCardWrap } from "./style";
import Typing from "@/utils/Typing";


type Props = {
  content: string;
}
const TypingCard: React.FC<Props> = ({ content }) => {
  const sourceEl = useRef();
  const outputEl = useRef();

  useEffect(() => {
    const typing = new Typing({
      source: sourceEl.current,
      output: outputEl.current,
      delay: 20
    });

    typing.start();
  }, [])
  return (
    <div className={TypingCardWrap}>
      <div style={{display: 'none'}} dangerouslySetInnerHTML={{__html: content}} ref={sourceEl}>
      </div>
      <div ref={outputEl}></div>
    </div>
  )
}

export default TypingCard;