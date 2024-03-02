import UserFunction from "./UserFunction";
import UserClass from "./UserClass";
function About () {
  return(
    <div className="aboutus-page">
      <h1>
        About Page
      </h1>
      <UserFunction name={"Shamal Durbule Function"} location={"nagpur function"}/>
      <UserClass name={"Shamal Durbule Class"} location={"nagpur class"}/>
    </div>
  )
}
export default About;