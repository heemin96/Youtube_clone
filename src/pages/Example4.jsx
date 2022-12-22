import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import ReactLoading from "react-loading";
import axios from "axios";

const LoaderWrap = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const ItemWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;

  .Item {
    width: 350px;
    height: 300px;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    margin: 1rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 6px;
  }
`;

function Example4() {
  const [itemList, setItemList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // ItemList
  const [target, setTarget] = useState(""); // target
  const [isLoding, setIsLoding] = useState(false); // isloding

  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting && !isLoding) {
      observer.unobserve(entry.target);
      setIsLoding(true);
      // 데이터를 가져오는 부분
      await new Promise((resolve) => setTimeout(resolve, 2000));
      let Items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      setItemList((itemLists) => itemLists.concat(Items));
      setIsLoding(false);
      observer.observe(entry.target);
    }
  };

  useEffect(() => {
    let observer;
    if (target) {
      // callback 함수, option
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.4,
      });
      observer.observe(target); // 타겟 엘리먼트 지정
    }
    return () => observer && observer.disconnect();
  }, [target]);

  return (
    <div className="App">
      <ItemWrap>
        {itemList.map((item, index) => (
          <div className="Item" key={index}>
            {index + 1}
          </div>
        ))}
      </ItemWrap>
      {isLoding ? (
        <LoaderWrap>
          <ReactLoading type="spin" color="#A593E0" />
        </LoaderWrap>
      ) : (
        ""
      )}
      {/* target State와 observer의 관찰 대상이 될  target Element */}
      <div ref={setTarget}></div>
    </div>
  );
}

export default Example4;
