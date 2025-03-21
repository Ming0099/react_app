import React, { useState, useEffect } from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Accommotate(props){
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);

    useEffect(() => { // 의존성 배열 X -> 컴포넌트가 mount된 직후에 호출되며, 컴포넌트가 업데이트 될때마다 호출
        console.log("========================");
        console.log("useEffect() is called.");
        console.log(`isFull : ${isFull}`);
    });

    useEffect(() => { // 의존성 배열 O -> 컴포넌트가 mount된 직후에 호출되며, 이후 count 값이 바뀔때마다 호출
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count value : ${count}`);
    }, [count]);

    return (
        <div style={{padding: 16}}>
            <p>{`총 ${count}명 수용했습니다.`}</p>

            <button onClick={increaseCount} disabled={isFull}>입장</button>
            <button onClick={decreaseCount}>퇴장</button>

            {isFull && <p style={{color:"red"}}>정원이 가득찼습니다.</p>}
        </div>
    );
}

export default Accommotate;