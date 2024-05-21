import React from 'react'
const userData=[{
    name:"Aneeshkumar M",
    City:"Namakkal",
    Description:"Front End Developer",
    skills:["UI/UX","HTML","CSS","JavaScript","React js","Java","Python"],
    online:false,
    profile:"images/pic1.jpg",
},
{
    name:"Soundarya M",
    City:"Namakkal",
    Description:"Front End Developer",
    skills:["UI/UX","HTML","CSS","JavaScript","React js","Java","Python"],
    online:false,
    profile:"images/pic2.jpg", 
},
{
    name:"Sneha C",
    City:"Namakkal",
    Description:"Front End Developer",
    skills:["UI/UX","HTML","CSS","JavaScript","React js","Java","Python"],
    online:true,
    profile:"images/pic3.jpg",
}]
function User(props){

    return <div className="card-container">
        <span className={props.online?"pro online":"pro offline"}>
            {props.online?"ONLINE":"OFFLINE"}
            </span>
        <img src={props.profile} className="img" alt="user" />
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <h3>{props.Description}</h3>
        <div className="buttons">
            <button className="primary">Message</button>
            <button className="primary outline">Following</button>
        </div>
        <div className="skills">
            <h6>Skills</h6>
            <ul>{props.skills.map((skill,index)=>(
                <li key={index}>{skill}</li>
           ))}
            </ul>
        </div>

    </div>
}
const Usercard = () => {
  return (
    <>
    {userData.map((user,index)=>(
        <User key={index} 
        name={user.name}
        city={user.city}
        Description={user.Description}
        online={user.online}
        profile={user.profile}
        skills={user.skills} 

        />
    ))}
    </>
     
    
  )
}
/*<User name="Aneeshkumar M" city="Namakkal" Description="Front-End Developer"
skills={["UI/UX","HTML","CSS","JavaScript","React js","Java","Python"]}  
online={true} profile="images/pic2.jpg"/> */

export default Usercard
