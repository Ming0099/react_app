/* 
    Elements 리액트 앱을 구성하는 가장 작은 블록들 
    # 불변성 : Elements 생성후에는 children이나 attributes를 바꿀 수 없다.
      바꾸고 싶다면 새로 생성해서 교체해야 한다.
*/

import React from "react";

function Clock(props){
    return (
        <div>
            <h1>안녕, 리액트!</h1>
            <h2>현재 시간 : {new Date().toLocaleTimeString()}</h2>
        </div>
    );
}

export default Clock;