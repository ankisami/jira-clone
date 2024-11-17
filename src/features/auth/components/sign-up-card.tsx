import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DottedSeparator from "@/components/dotted-separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const SignUpCard = () => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <Card className="w-full h-full md:w-[487px] border-none shadow-none">
      <CardHeader className="flex items-center justify-center text-center p-7">
        <CardTitle className="text-2xl px-7"> Sign Up</CardTitle>
        <CardDescription className="text-sm px-7">
          By signing up, you agree to our{" "}
          <Link href="/privacy-policy" className="text-blue-500">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/terms-of-service" className="text-blue-500">
            Terms of Service
          </Link>
        </CardDescription>
      </CardHeader>

      <DottedSeparator className="px-7" />

      <CardContent className="p-7">
        <form className="space-y-4">
          <Input
            disabled={false}
            required
            type="text"
            placeholder="Enter your name"
            value={""}
            onChange={handleInputChange}
          />
          <Input
            disabled={false}
            required
            type="email"
            placeholder="Enter email address"
            value={""}
            onChange={handleInputChange}
          />
          <Input
            required
            type="password"
            placeholder="Enter password"
            value={""}
            onChange={handleInputChange}
            disabled={false}
            min={8}
            max={256}
          />

          <Button
            disabled={false}
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
          >
            Login
          </Button>
        </form>
      </CardContent>

      <DottedSeparator className="px-7" />

      <CardContent className="p-7 flex flex-col gap-y-4">
        <Button
          disabled={false}
          type="submit"
          variant="secondary"
          size="lg"
          className="w-full"
        >
          <FcGoogle className="mr-2 size-5" />
          Login with Google
        </Button>
        <Button
          disabled={false}
          type="submit"
          variant="secondary"
          size="lg"
          className="w-full"
        >
          <FaGithub className="mr-2 size-5" />
          Login with Github
        </Button>
      </CardContent>
    </Card>
  );
};

export default SignUpCard;
