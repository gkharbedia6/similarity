"use client";

import { ButtonHTMLAttributes, FC } from "react";

import Button from "@/ui/Button";
import { toast } from "@/ui/Toast";
import Icons from "@/components/Icons";

interface CopyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  valueToCopy: string;
}

const CopyButton: FC<CopyButtonProps> = ({
  valueToCopy,
  className,
  ...props
}) => {
  return (
    <Button
      {...props}
      onClick={() => {
        navigator.clipboard.writeText(valueToCopy);
        toast({
          title: "Copied",
          message: "Api key has been copied to your clipboard",
          type: "success",
        });
      }}
      variant={"ghost"}
      className={className}
    >
      <Icons.Copy className="h-5 w-5" />
    </Button>
  );
};

export default CopyButton;
