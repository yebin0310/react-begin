import { useState, useEffect } from "react";
function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter(prev => prev + 1);
  console.log("i run all the time");
  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  useEffect(() => {
    console.log("call the api");
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("search for", keyword);
    }
  }, [keyword]);
  //keyword 가 변화할때 만 실행하고 싶다면 [] 안에 keyword를 쓰셈
  // 두개 도 넣을수 있음 둘다 변화할때
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here"></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
