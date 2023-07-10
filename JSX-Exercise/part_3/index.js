maxNameLength = 6;

function Person({name, age, hobbies}) {
   const hobbiesArr = hobbies.map(hobby => <li>{hobby}</li>) 
   const voteMsg = age >= 18 ? "please go vote!" : "you must be 18 to vote!";
   return (
       <div>
           <p>Learn some information about this person</p>
           <h3>{voteMsg}</h3>
           <ul>
               <li>Name: {name.slice(0, maxNameLength)}</li>
               <li>Age: {age}</li>
           </ul>
           <ul>
               Hobbies:
               {hobbiesArr}
           </ul>
       </div>
    )
}




const App = () => (
    <div>
       <Person
       name="Jessica"
       age={21}
       hobbies={["Watching crime documentaries", "being on tiktok", "going shopping"]}
       />
       <Person 
       name="Grant" 
       age={25} 
       hobbies={["basketball", "coding", "working out"]} 
       />
       <Person
       name="Marsha"
       age={10}
       hobbies={["surfboarding", "making prank calls"]}
       />
       <Person
       name="Zeke"
       age={8}
       hobbies={["barking", "swimming", "eating food"]}
       />
    </div>
);


ReactDOM.render(<App/>, document.getElementById('root'));