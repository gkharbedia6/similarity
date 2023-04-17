"use client";

import { FC, useState } from "react";
import Button from "@/ui/Button";
import { signIn } from "next-auth/react";
// import { toast } from "@/components/ui/Toast";

interface SignInButtonProps {}

const SignInButton: FC<SignInButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signInWIthGoogle = async () => {
    setIsLoading(true);

    try {
      await signIn("google");
    } catch (error) {
      // toast({
      //   title: "Error signing in",
      //   message: "Please try again later",
      //   type: "error",
      // });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button onClick={signInWIthGoogle} isLoading={isLoading}>
      Sign In
    </Button>
  );
};

export default SignInButton;
