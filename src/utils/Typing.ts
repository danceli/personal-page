
import { isFunction } from 'lodash-es'
type TypingChain = {
  parent: null | HTMLElement;
  dom: HTMLElement;
  val: any[];
}

type TypingOptions = {
  source: HTMLElement;
  output: HTMLElement;
  delay?: number;
  done?: () => void;
}

class Typing {
  private options: TypingOptions;
  private chain: TypingChain;
  constructor(opts: TypingOptions) {
    this.options = opts;
    this.chain = {
      parent: null,
      dom: this.options.output,
      val: []
    };
    if (!isFunction(this.options.done)) {
      this.options.done = () => {};

    }
  }

  init() {
    this.chain.val = this.convert(this.options.source, this.chain.val);
    console.log(this.chain)
  }

  start() {
    this.init()
    this.play(this.chain)
  }

  print(dom: HTMLElement, val: string, callback: any) {
    setTimeout(function () {
      dom.appendChild(document.createTextNode(val));
      callback();
    }, this.options.delay);
  }

  play(ele: any) {
    if (!ele.val.length) {
      if (ele.parent) this.play(ele.parent);
      else this.options.done();
      return;
    }
    let current = ele.val.shift()  //获取第一个元素，同时删除数组中的第一个元素
    if (typeof current === 'string') {
      this.print(ele.dom, current, () => {
        this.play(ele); //继续打印下一个字符
      })
    } else {
      let dom = current.dom.cloneNode() //克隆节点，不克隆节点的子节点，所以不用加参数true
      ele.dom.appendChild(dom)
      this.play({
        parent: ele,
        dom,
        val: current.val
      })
    }
  }

  convert(dom: HTMLElement, arr: any[]) {
    const children = Array.from(dom.childNodes);
    for (let i = 0; i < children.length; i++) {
      const node: any = children[i];
      if (node.nodeType === 3) {
        arr = arr.concat(node.nodeValue?.split(''));
      } else if(node.nodeType === 1) {
        const val = this.convert(node, []);
        arr.push({
          'dom': node,
          val
        });
      }
    }
    return arr;
  }
}


export default Typing;