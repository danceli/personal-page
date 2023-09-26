import { globalEmit } from "@subjects/global";

const Books = () => {
  return <div>Books

    <button onClick={() => {
      globalEmit('project/initProject', {
        name:' danceli'
      })
    }}>+1</button>
  </div>;
};

export default Books;
