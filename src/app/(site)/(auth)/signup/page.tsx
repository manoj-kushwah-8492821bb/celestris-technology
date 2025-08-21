import { Metadata } from "next";
import SignUp from "@/app/components/auth/sign-up";

export const metadata: Metadata = {
  title:
    "Sign Up | Celestris Technology",
};

const SignupPage = () => {
  return (
    <>
      <SignUp />
    </>
  );
};

export default SignupPage;
