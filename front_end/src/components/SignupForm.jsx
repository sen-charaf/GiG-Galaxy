import Header from "./Header";
import Signup from "./Signup";

export default function SignupForm(){
    return(
        <div >
            <Header
              heading="Welcom to GIG GALAXY"
              paragraph="Already have an account? "
              linkName="Login"
              linkUrl="/login"
            />
            <Signup/>
        </div>
    )
}