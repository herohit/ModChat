import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuthStore } from "@/features/authStore";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "sonner";
import * as zod from "zod";

// Validation Schema
const schema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(6),
});

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    toast.success("Login successfully!", {
      icon: "🎉",
    });
    navigate("/");
  };

  return (
    <div className="min-h-full  p-3 flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md space-y-4 border p-6 rounded-xl shadow-md bg-white dark:bg-slate-800"
      >
        <h2 className="text-2xl font-bold text-center">Login to ModChat</h2>

        <Input placeholder="Email" {...register("email")} />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <Input
          placeholder="Password"
          type="password"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}

        <Button type="submit" className="w-full bg-[#258AF5] dark:text-white">
          Login
        </Button>
        <p className="text-gray-500 dark:text-gray-400">Forgot Password ? <Link to="/forgotpassword" className="text-blue-400">Click Here</Link></p>
        <p className=" text-gray-500 dark:text-gray-400">
          Don't have an account ?{" "}
          <Link to="/register" className="text-blue-400 font-bold">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
