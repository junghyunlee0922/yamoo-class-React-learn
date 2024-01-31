  // 바닐라 스크립트의 방식
  // jQuery 라이브러리 방식
  // 명령형 프로그래밍
  // HOW
  // [   ]을 입력하면, 이벤트를 감지해서 [   ]에 출력한다.

  
  // vs.
  
  // 리액트의 방식
  // 어떤 방법 ??? 선언형 프로그래밍
  // 무엇을(WHAT)
  // 상태를 선언해야 한다.
  
  import { useState } from "react";

function Exercise() {

  const [feelMessage, setFellMessage] = useState(); // undefined

  const handleUpdateFeelMessage

  return (
    <div>
      <h2>폼 컨트롤</h2>
      <form>
        <div
          style={{
            display: 'flex',
            gap: 4,
          }}
        >
          <label htmlFor="feel-today">오늘 기분</label>
          <input id="feel-today" type="text" placeholder="공부하기 좋은 날이네~" />
        </div>
      </form>

      <div
        style={{
          border: '1px solid',
          marginBlock: 12,
          padding: 20,
        }}
      >
        {/* <output>폼 입력 내용 출력</output> */}
        <output>{feelMessage}</output>
      </div>
    </div>
  )
}

export default Exercise;