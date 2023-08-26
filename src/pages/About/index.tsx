import TypingCard from "@/components/TypingCard";
import { AboutWrap } from "./style";

const About = () => {

  const source = `
  <p>大家好，我是难凉热血。</p>
  <p>终南山下码农一枚，师从道长王重阳，酷爱打码，崇尚开源精神，乐于分享。</p>
  <p>2005年服役于中国人民解放军东南战区狼牙特种大队，担任狙击手。</p>
  <p>
    2008年受俄罗斯阿尔法特种部队邀请，执教于该特种部队第一大队教授其队员学习中国特色社会主义理论及毛泽东思想。
  </p>
  <p>2011年竞选美国总统落选，遂心灰意冷，放下所有荣誉，隐居终南山下。</p>
  <p>2015年受道长王重阳委托，为道观开发香火管理系统，遂沉迷IT，无法自拔。</p>
  <p>喜欢折腾和搞机，追求新鲜技术。</p>
  <p>下边是我的微信，欢迎同好伙伴一起树(tree)新(new)风(bee)！！！</p>
  `
  return (
    <div className={AboutWrap}>
     <TypingCard content={source} />
    </div>
  );
};

export default About;
