import Header from "./Header";
import Login from "./Login";

export default function LoginForm() {
  return (
    <div>
      <Header
        heading="Login to GIG GALAXY"
        paragraph="Don't have an account yet? "
        linkName="Signup"
        linkUrl="/signup"
      />
      <Login />
    </div>
  );
}
