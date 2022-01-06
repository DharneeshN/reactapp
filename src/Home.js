import React,{useState, useEffect} from 'react';
import UpdatedComponent from './Hoptimeout';

function Home({descrip,Naam}) {
    const [Feed, setFeed] = useState("")
    let [name,setName]  = useState("");
    let [age,setAge] = useState("");
  

   const changeName = ()=>{
       setName(Naam);
       console.log(name);
   }

   function changeAge(){
           setAge(21);
           console.log(age);
   }

    return (
       <div className="App-header">
            <h1>Welcome</h1>
             <h2 data-testid="hitest">Hi {name}</h2>
             <div><button onClick={changeName} data-testid="Button4" >click here to know my name</button></div>
            <h3 data-testid="displaydescrip"> {descrip}</h3>
            <h3> {age}</h3>
            <button onClick={changeAge} data-testid="Button1">click here to know my age</button>
            <br/> 
            <br/>
           <h4>Please give Feedback</h4>
            <input type="text" data-testid="searchtext" placeholder='Feedback'
            onChange={(e)=>{setFeed(e.target.value);}}/>
           <h1 data-testid="displaytext"  >{Feed}</h1>
           {/* {Showdiv && (
           <div data-testid="showtext">
               Hey ! thanks for Feedback
           </div>)} */}
        </div>
    )
}

export default Home;
