import Signin from "@/app/components/auth/sign-in";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Sign In | Celestris Technology",
};

const SigninPage = () => {
  return (
    <>
      <Signin />
    </>
  );
};

export default SigninPage;
