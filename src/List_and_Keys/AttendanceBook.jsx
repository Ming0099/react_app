import React from "react";

const students =[
    {
        id : 1,
        name : "inje",
    },
    {
        id : 2,
        name : "steve",
    },
    {
        id : 3,
        name : "bill",
    },
    {
        id : 4,
        name : "jeff",
    },
];

function AttendanceBook(props){
    return(
        <ul>
            {students.map((student) =>{
                return <li key={student.id}>{student.name}</li>; // map() 함수 안에 있는 Elements는 꼭 key가 필요하다
            })}
        </ul>
    );
}

export default AttendanceBook;