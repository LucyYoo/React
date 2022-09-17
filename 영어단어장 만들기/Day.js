// import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Word from "./Word";
export default function Day(){
    const a = useParams();
    const day = a.day;
    const history = useNavigate();

    const words = useFetch(`http://localhost:3001/words?day=${day}`);
    const days = useFetch("http://localhost:3001/days");
    
    // const [deleteDay, setDay] = useState(a.day);

    function onPrev(){
        if(day-1 > 0){
            history(`/day/${Number(day)-1}`)
        }
    }

    function onNext(){
        if(Number(day)+1 <= days.length){
            history(`/day/${Number(day)+1}`)
        }
    }

    // function onDleDay(){
    //     if(window.confirm('삭제하시겠습니까?')){
    //         fetch(`http://localhost:3001/days/${deleteDay}`,{
    //             method: 'DELETE'
    //         }).then(res => {
    //             if(res.ok){
    //                 setDay({id:0});
    //             }
    //         })
    //         history('/');
    //     }
    // }

    // if(deleteDay.id === 0) {
    //     return null;
    // }


    return(
        <>
        <div className="title">
            <h2>Day {day}</h2>
            <button >Day 삭제</button>
        </div>
        {words.length === 0 && <span>Loading...</span>}
        <table>
            <tbody>
                {words.map(word => (
                    <Word word={word} key={word.id}/>
                ))}
            </tbody>
        </table>
        
        <button className="btn" onClick={onPrev}>Prev Day</button>
        <button className="btn next" onClick={onNext}>Next Day</button>
        </>
        );
}
