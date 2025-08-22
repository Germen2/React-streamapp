import { useNavigate } from "react-router-dom";
import { Header, MoviesCarousel, SignUpContent } from "../components";
import { useAuthStatus } from "../hooks";

function SignUpPage() {
  const authStatus = useAuthStatus();
  const navigator = useNavigate();

  if (!authStatus) {
    navigator("/home");
  }
  return (
    <>
      <Header isLoggedIn={authStatus.isLoggedIn} user={authStatus.authUser} />
      <MoviesCarousel />
      <SignUpContent />
    </>
  );
}

export default SignUpPage;
