/*
    Hook을 사용하면 함수 컴포넌트도 클래스 컴포넌트의 기능을 동일하게 구현할 수 있다.

    useState : state를 사용하기 위한 Hook
      const [변수명, set함수명] = useState(초기값);

    useEffect : side effect(효과,영향)를 수행하기 위한 Hook 
      useEffect(이펙트 함수, 의존성 배열);
        컴포넌트가 마운트 된 이후, 
        의존성 배열에 있는 변수들 중 하나라도 값이 변경되었을 때 실행됨
        의존성 배열에 빈 배열을 넣으면 마운트와 언마운트시에 단 한 번씩만 실행됨
        의존성 배열 생략 시 컴포넌트 업데이트 시마다 실행됨
        useEffect의 return 함수의 역할은 componentWillUnmount 가 하는 역할과 동일함

    useMemo : Memoized value를 리턴하는 Hook
      의존성 배열에 들어있는 변수가 변했을 경우에만 새로 create 함수를 호출하여 결과값을 반환하며,
      그렇지 않을 경우에는 기존함수의 결과값을 그대로 반환함
    
    useCallback : useMemo() Hook과 유사하지만 값이 아닌 함수를 반환

    useRef : Reference를 사용하기 위한 Hook
      Reference : 특정 컴포넌트에 접근할 수 있는 객체
    
    Hook의 규칙
    1. Hook은 무조건 최상위 레벨에서만 호출해야 한다. (반복문이나 조건문, 중첩된 함수들에서 Hook을 호출하면 안됨)
    2. 리액트 함수 컴포넌트에서만 Hook을 호출해야 한다.
    eslint-plugin-react-hooks → Hook의 규칙을 따르도록 강제해 주는 플러그인

    Custom Hook : 직접 Hook을 만들어 사용할 수 있음
      Custom Hook의 이름은 꼭 use로 시작해야 함
*/

import React, { useState } from "react";

function useCounter(initialValue){ // Custom Hook
    const [count, setCount] = useState(initialValue);

    const increaseCount = () => setCount((count) => count + 1);
    const decreaseCount = () => setCount((count) => Math.max(count - 1, 0));

    return [count, increaseCount, decreaseCount];
}

export default useCounter;