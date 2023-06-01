import { createContext } from "react"
import JobDescrption from "../JobDescription/JobDescrption";

const Role = createContext();
const Skills = createContext();
const Experience = createContext();

export default function Button(props){
    console.log(props)
    return (
       <>
        <button>View Job</button>
        <Role.Provider value={props.role}>
            <Skills.Provider value={props.skill}>
                <Experience.Provider value={props.experience}>
                    <JobDescrption />
                </Experience.Provider>
            </Skills.Provider>
        </Role.Provider>
       </> 
    )
}

export {Role, Skills, Experience} ;