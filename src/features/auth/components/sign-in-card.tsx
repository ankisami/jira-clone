import React from "react";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DottedSeparator from "@/components/dotted-separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, "Password must contain at least 8 character(s)")
    .max(256, "Password must contain at most 256 character(s)"),
});

const SignInCard = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.dir(data, { depth: Infinity });
  };

  return (
    <Card className="w-full h-full md:w-[487px] border-none shadow-none">
      <CardHeader className="flex items-center justify-center text-center p-7">
        <CardTitle className="text-2xl px-7"> Welcome Back !</CardTitle>
      </CardHeader>

      <DottedSeparator className="px-7" />

      <CardContent className="p-7">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="Enter your email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder="Enter your password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
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
        </Form>
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
          <span>Login with Google</span>
        </Button>
        <Button
          disabled={false}
          type="submit"
          variant="secondary"
          size="lg"
          className="w-full"
        >
          <FaGithub className="mr-2 size-5" />
          <span>Login with Github</span>
        </Button>
      </CardContent>

      <DottedSeparator className="px-7" />

      <CardContent className="p-7 flex justify-center items-center">
        <p>Don&apos;t have an account ?</p>
        <Link href="/sign-up">
          <span className="text-blue-700">&nbsp;Sign Up</span>
        </Link>
      </CardContent>
    </Card>
  );
};

export default SignInCard;
