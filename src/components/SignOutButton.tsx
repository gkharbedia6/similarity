"use client";

import { FC, useState } from "react";
import Button from "@/ui/Button";
import { signOut } from "next-auth/react";
// import { toast } from "@/components/ui/Toast";

interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signUserOut = async () => {
    setIsLoading(true);

    try {
      await signOut();
    } catch (error) {
      // toast({
      //   title: "Error signing Out",
      //   message: "Please try again later",
      //   type: "error",
      // });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button onClick={signUserOut} isLoading={isLoading}>
      Sign Out
    </Button>
  );
};

export default SignOutButton;
