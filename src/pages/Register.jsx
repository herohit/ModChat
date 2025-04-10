import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuthStore } from "@/features/authStore";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "sonner";
import * as zod from "zod";

const schema = zod.object({
  name:zod.string().min(2,'Name is required'),
  email: zod.string().email(),
  password : zod.string().min(6,"Password must be at least 6 characters long"),
  confirmPassword: zod.string().min(),
})
.refine((data)=> data.password == data.confirmPassword,{
  message: 'Passwords do not match',
  path:['confirmPassword'],
});

const Register = () => {

  const navigate = useNavigate();
  const {register: registerUser} = useAuthStore();


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit =async (data) => {
    const {name,email,password} = data;
    try{
      await registerUser({name,email,password});
      toast.success("Registered Successfully !");
      navigate('/')
    }
    catch(err){
      console.log(err);
    }
  };

  return (
    <div className="min-h-full  p-3 flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md space-y-4 border p-6 rounded-xl shadow-md bg-white dark:bg-slate-800"
      >
        <h2 className="text-2xl font-bold text-center">Create Account</h2>

        <Input placeholder="Name" {...register('name')} />

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

        <Input placeholder="Confirm Password" {...register('confirmPassword')}/>
        {errors.confirmPassword && (<p className="text-red-500">{errors.confirmPassword.message}</p>)}

        <Button type="submit" className="w-full bg-[#258AF5] dark:text-white">
          Register
        </Button>
        <p className="text-center text-gray-500 dark:text-gray-400">Already have an account? <Link to="/login" className="text-blue-400 font-bold">Login</Link></p>
      </form>
      <div>
      </div>
    </div>
  );
};

export default Register;
