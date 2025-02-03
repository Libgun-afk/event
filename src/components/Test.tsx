/** @format */

// /** @format */

// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { motion, AnimatePresence } from "framer-motion";
// import { Eye, EyeOff, Loader2 } from "lucide-react";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import * as z from "zod";
// import Image from "next/image";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Checkbox } from "@/components/ui/checkbox";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// // Form validation schemas
// const loginSchema = z.object({
//   email: z.string().email("И-мэйл хаяг буруу байна"),
//   password: z.string().min(6, "Нууц үг хамгийн багадаа 6 тэмдэгт байх ёстой"),
// });

// const registerSchema = z
//   .object({
//     firstName: z.string().min(1, "Нэр оруулна уу"),
//     lastName: z.string().min(1, "Овог оруулна уу"),
//     email: z.string().email("И-мэйл хаяг буруу байна"),
//     password: z.string().min(6, "Нууц үг хамгийн багадаа 6 тэмдэгт байх ёстой"),
//     confirmPassword: z.string(),
//     birthDate: z.string().min(1, "Төрсөн огноо оруулна уу"),
//     gender: z.string().min(1, "Хүйс сонгоно уу"),
//     terms: z
//       .boolean()
//       .refine((val) => val === true, "Үйлчилгээний нөхцөлийг зөвшөөрнө үү"),
//   })
//   .refine((data) => data.password === data.confirmPassword, {
//     message: "Нууц үг таарахгүй байна",
//     path: ["confirmPassword"],
//   });

// type LoginFormValues = z.infer<typeof loginSchema>;
// type RegisterFormValues = z.infer<typeof registerSchema>;

// interface AuthFormProps {
//   mode: "login" | "register";
// }

// export default function AuthForm({ mode }: AuthFormProps) {
//   const [isLoading, setIsLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const router = useRouter();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<LoginFormValues | RegisterFormValues>({
//     resolver: zodResolver(mode === "login" ? loginSchema : registerSchema),
//   });

//   const onSubmit = async (data: LoginFormValues | RegisterFormValues) => {
//     try {
//       setIsLoading(true);

//       // Simulate API call
//       await new Promise((resolve) => setTimeout(resolve, 2000));

//       if (mode === "login") {
//         // Handle login
//         toast.success("Амжилттай нэвтэрлээ! Тавтай морил.", {
//           position: "top-right",
//         });
//       } else {
//         // Handle registration
//         toast.success("Бүртгэл амжилттай! Таны бүртгэл амжилттай үүслээ.", {
//           position: "top-right",
//         });
//       }

//       router.push("/dashboard");
//     } catch (error) {
//       toast.error("Алдаа гарлаа! Дахин оролдоно уу.", {
//         position: "top-right",
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="flex min-h-screen">
//       {/* Toast контейнер */}
//       <ToastContainer />

//       {/* Left Preview Section */}
//       <Card className="relative hidden md:flex md:w-[464px] flex-col items-center justify-center bg-orange-400 text-white">
//         <CardHeader className="text-center">
//           <CardTitle className="text-2xl">
//             Бүх төрлийн төхөөрөмжөөс хялбар ашиглах боломжтой
//           </CardTitle>
//           <CardDescription className="text-white/80">
//             fully responsibility
//           </CardDescription>
//         </CardHeader>
//         <CardContent className="flex flex-col items-center">
//           <div className="relative w-full h-64 mb-8">
//             <Image
//               src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-01%20at%2021.05.08-7NlEnl0kJvw9FJKAqpYQsEkg587Oga.png"
//               alt="Preview"
//               fill
//               className="object-contain"
//             />
//           </div>
//           <div className="relative w-32 h-32">
//             <Image
//               src="/qr-code.png"
//               alt="QR Code"
//               fill
//               className="object-contain"
//             />
//           </div>
//           <div className="flex gap-2 mt-4">
//             <div className="w-2 h-2 rounded-full bg-white" />
//             <div className="w-2 h-2 rounded-full bg-white/50" />
//             <div className="w-2 h-2 rounded-full bg-white/50" />
//           </div>
//         </CardContent>
//       </Card>

//       {/* Right Form Section */}
//       <Card className="flex-1 rounded-none md:rounded-lg">
//         <CardHeader className="space-y-1 text-center">
//           <Image
//             src="/entertainment-logo.png"
//             alt="Entertainment.mn"
//             width={180}
//             height={40}
//             className="mx-auto mb-4"
//           />
//           <CardTitle className="text-2xl">
//             {mode === "login" ? "Нэвтрэх" : "Бүртгүүлэх"}
//           </CardTitle>
//           <CardDescription>
//             {mode === "login"
//               ? "Хэрэглэгчийн нэр, нууц үг эсвэл хялбар нэвтрэх"
//               : "Хэрэглэгч нэр, хариуцлагын нэвтрэх"}
//           </CardDescription>
//         </CardHeader>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <CardContent className="space-y-4">
//             <div className="space-y-2">
//               <Label htmlFor="email">
//                 И-мэйл хаяг{mode === "register" && "*"}
//               </Label>
//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="И-мэйл хаяг"
//                 {...register("email")}
//               />
//               {errors.email && (
//                 <p className="text-sm text-red-500">{errors.email.message}</p>
//               )}
//             </div>
//           </CardContent>

//           <CardFooter className="flex flex-col gap-4">
//             <Button type="submit" className="w-full" disabled={isLoading}>
//               {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
//               {mode === "login" ? "Нэвтрэх" : "Бүртгүүлэх"}
//             </Button>
//           </CardFooter>
//         </form>
//       </Card>
//     </div>
//   );
// }

<form onSubmit={handleSubmit(onSubmit)} className="flex justify-center">
  <CardContent className="space-y-4 w-[300px]">
    {mode === "register" && (
      <>
        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">Нэр*</Label>
            <Input
              id="firstName"
              placeholder="Нэр"
              {...register("firstName")}
              className={`w-[300px] ${
                errors.firstName ? "border-red-500" : ""
              }`}
            />
            {errors.firstName && (
              <p className="text-sm text-red-500">{errors.firstName.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Овог*</Label>
            <Input
              id="lastName"
              placeholder="Овог"
              {...register("lastName")}
              className={`w-[300px] ${errors.lastName ? "border-red-500" : ""}`}
            />
            {errors.lastName && (
              <p className="text-sm text-red-500">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="birthDate">Төрсөн огноо (YYYY/MM/DD)*</Label>
          <Input
            id="birthDate"
            type="date"
            {...register("birthDate")}
            className={`w-[300px] ${errors.birthDate ? "border-red-500" : ""}`}
          />
          {errors.birthDate && (
            <p className="text-sm text-red-500">{errors.birthDate.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="gender">Хүйс*</Label>
          <select
            id="gender"
            className={`w-[300px] p-2 border rounded-md ${
              errors.gender ? "border-red-500" : ""
            }`}
            {...register("gender")}
          >
            <option value="">Сонгох</option>
            <option value="male">Эрэгтэй</option>
            <option value="female">Эмэгтэй</option>
          </select>
          {errors.gender && (
            <p className="text-sm text-red-500">{errors.gender.message}</p>
          )}
        </div>
      </>
    )}

    <div className="space-y-2">
      <Label htmlFor="email">И-мэйл хаяг{mode === "register" && "*"}</Label>
      <Input
        id="email"
        type="email"
        placeholder="И-мэйл хаяг"
        {...register("email")}
        className={`w-[300px] ${errors.email ? "border-red-500" : ""}`}
      />
      {errors.email && (
        <p className="text-sm text-red-500">{errors.email.message}</p>
      )}
    </div>

    <div className="space-y-2">
      <Label htmlFor="password">Нууц үг{mode === "register" && "*"}</Label>
      <div className="relative">
        <Input
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="Нууц үг"
          {...register("password")}
          className={`w-[300px] ${errors.password ? "border-red-500" : ""}`}
        />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <EyeOff className="h-4 w-4" />
          ) : (
            <Eye className="h-4 w-4" />
          )}
        </Button>
      </div>
      {errors.password && (
        <p className="text-sm text-red-500">{errors.password.message}</p>
      )}
    </div>

    {mode === "register" && (
      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Нууц үг давтах*</Label>
        <Input
          id="confirmPassword"
          type="password"
          placeholder="Нууц үг давтах"
          {...register("confirmPassword")}
          className={`w-[300px] ${
            errors.confirmPassword ? "border-red-500" : ""
          }`}
        />
        {errors.confirmPassword && (
          <p className="text-sm text-red-500">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>
    )}

    <Button
      type="submit"
      className="w-[300px] bg-[#FD902E] hover:bg-[#F57C00]"
      disabled={isLoading}
    >
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {mode === "login" ? "Нэвтрэх" : "Бүртгүүлэх"}
    </Button>
  </CardContent>
</form>;
