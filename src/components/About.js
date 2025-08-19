import User from "./User";
import UserClass from "./UserClass";
const About=()=>{
    return(
        <div className='about'>
        <h1>About</h1>
            <p>This is the about page for the food app</p>

            <User name="John Doe" email="john.doe@example.com" />
            <UserClass name={"Jane Smith"} email={"jane.smith@example.com"} />
        </div>
    )
}

export default About;