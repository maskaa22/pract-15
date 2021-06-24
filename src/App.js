
import './App.css';
import Comments from "./components/comments/Comments";
import {useEffect, useState} from "react";

function App() {

    let [commentsList, setCommentsList] = useState([]);
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => {
                    console.log(value);

                    setCommentsList(value);
            });
    }, []);



  return (
    <div >
        <Comments items={commentsList}/>
    </div>
  );
}

export default App;
