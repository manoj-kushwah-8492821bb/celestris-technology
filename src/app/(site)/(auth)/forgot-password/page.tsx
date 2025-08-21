import React from "react";
import { Metadata } from "next";
import ForgotPassword from "@/app/components/auth/forgot-password";

export const metadata: Metadata = {
  title: "Forgot Password | Celestris Technology",
};

const ForgotPasswordPage = () => {
  return (
    <>
      <ForgotPassword />
    </>
  );
};

export default ForgotPasswordPage;
