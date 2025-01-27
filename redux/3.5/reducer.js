import { INCREASE, DECREASE, RESET } from "./action-type.js";

const initializeState = { count: 0 };

/* 
  redux내 reducer는 항시 외부 함수에 의존하지 않고 동일 입력과 출력을 해야하는
  순수 함수이기 때문에 네크워크 호출 처럼 성공 또는 실패를 반환 할 수 있는 비동기 처리는 지양한다.
*/

export const reducer = (state = initializeState, action) => {
  switch (action.type) {
    case INCREASE:
      return { ...state, count: state.count + 1 };
    case DECREASE:
      return { ...state, count: state.count - 1 };
    case RESET:
      fetch("/reset")
        .then((res) => res.json())
        .then((res) => {
          if (res) {
            return { ...state, count: 0 };
          }
        });
      return { ...state, count: 0 };
    default:
      return { ...state };
  }
};
