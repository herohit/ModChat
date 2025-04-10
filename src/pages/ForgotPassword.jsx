import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as z from "zod";

const schema = z.object({
  email: z.string().email(),
});

const ForgotPassword = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
    navigate("/reset-password");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-slate-900 p-4">
      <div className="w-full max-w-md">
        <h1 className="text-center font-bold text-2xl mb-6">
          Reset your password
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 border p-6 rounded-xl shadow-md bg-white dark:bg-slate-800"
        >
          <h2 className="text-center">
            Enter the email address you used to create this account.
          </h2>
          <Input placeholder="Enter email" {...register("email")} />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          <div className="flex gap-2">
            <Button type="submit" variant="default" className="flex-1">
              Send OTP
            </Button>
            <Button variant="outline" className="flex-1" onClick={() => navigate('/login')}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
