/** @format */

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Form validation schemas
const loginSchema = z.object({
  email: z.string().email("И-мэйл хаяг буруу байна"),
  password: z.string().min(6, "Нууц үг хамгийн багадаа 6 тэмдэгт байх ёстой"),
});

const registerSchema = z
  .object({
    firstName: z.string().min(1, "Нэр оруулна уу"),
    lastName: z.string().min(1, "Овог оруулна уу"),
    email: z.string().email("И-мэйл хаяг буруу байна"),
    password: z.string().min(6, "Нууц үг хамгийн багадаа 6 тэмдэгт байх ёстой"),
    confirmPassword: z.string(),
    birthDate: z.string().min(1, "Төрсөн огноо оруулна уу"),
    gender: z.string().min(1, "Хүйс сонгоно уу"),
    terms: z
      .boolean()
      .refine((val) => val === true, "Үйлчилгээний нөхцөлийг зөвшөөрнө үү"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Нууц үг таарахгүй байна",
    path: ["confirmPassword"],
  });

type LoginFormValues = z.infer<typeof loginSchema>;
type RegisterFormValues = z.infer<typeof registerSchema>;

interface AuthFormProps {
  mode: "login" | "register";
}

export default function AuthForm({ mode }: AuthFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const [activeImage, setActiveImage] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev % 3) + 1); // 1, 2, 3 гэсэн дарааллаар ээлжлэн солих
    }, 3000); // 3 секунд тутамд солих

    return () => clearInterval(interval); // Цэвэрлэгээ
  }, []);

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<LoginFormValues | RegisterFormValues>({
  //   resolver: zodResolver(mode === "login" ? loginSchema : registerSchema),
  // });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(mode === "register" ? registerSchema : loginSchema),
  });

  const onSubmit = async (data: LoginFormValues | RegisterFormValues) => {
    try {
      setIsLoading(true);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      if (mode === "login") {
        // Handle login
        toast({
          title: "Амжилттай нэвтэрлээ",
          description: "Тавтай морил!",
        });
      } else {
        // Handle registration
        toast({
          title: "Бүртгэл амжилттай",
          description: "Таны бүртгэл амжилттай үүслээ",
        });
      }

      router.push("/dashboard");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Алдаа гарлаа",
        description: "Дахин оролдоно уу",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex px-60 py-10">
      {/* Left Preview Section */}
      <Card className="relative hidden md:flex md:w-[464px] flex-col items-center justify-center bg-orange-400 text-white">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">
            Бүх төрлийн төхөөрөмжөөс хялбар ашиглах боломжтой
          </CardTitle>
          <CardDescription className="text-white/80">
            fully responsibility
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <div className="relative w-full h-64 mb-8">
            {[1, 2, 3].map((index) => (
              <Image
                key={index}
                src={`/image copy${index}.png`}
                alt="Preview"
                fill
                className={`object-contain w-[352px] h-[235px] transition-opacity duration-500 ${
                  activeImage === index ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
          <div className="relative w-32 h-32">
            <Image
              src="/qr-code.png"
              alt="QR Code"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex gap-2 mt-4">
            {/* Цэгүүдийг ээлжлэн идэвхжүүлэх */}
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  activeImage === index ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Right Form Section */}
      <Card className="flex-1 rounded-none md:rounded-lg">
        <CardHeader className="space-y-1 text-center">
          <Image
            src="/image.png"
            alt="Entertainment.mn"
            width={180}
            height={40}
            className="mx-auto mb-4"
          />
          <CardTitle className="text-2xl">
            {mode === "login"
              ? "Нэвтрэх / Login"
              : "Бүртгүүлэх / Create account"}
          </CardTitle>
          <CardDescription>
            {mode === "login"
              ? "Хэрэглэгчээр, харилцагчаар нэвтрэх"
              : "Хэрэглэгчээр, харилцагчаар нэвтрэх"}
          </CardDescription>
        </CardHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className={`flex flex-col justify-center px-30 ${
            mode === "login" ? "max-w-md mx-auto" : "max-w-2xl mx-auto"
          }`}
        >
          <CardContent
            className={`space-y-4 ${
              mode === "login" ? "w-full" : "w-full grid grid-cols-2 gap-4"
            }`}
          >
            {mode === "register" && (
              <>
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Нэр*</Label>
                    <Input
                      id="firstName"
                      placeholder="Нэр"
                      {...register("firstName")}
                      className={`w-full ${
                        errors.firstName ? "border-red-500" : ""
                      }`}
                    />
                    {errors.firstName && (
                      <p className="text-sm text-red-500">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Овог*</Label>
                    <Input
                      id="lastName"
                      placeholder="Овог"
                      {...register("lastName")}
                      className={`w-full ${
                        errors.lastName ? "border-red-500" : ""
                      }`}
                    />
                    {errors.lastName && (
                      <p className="text-sm text-red-500">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="birthDate">Төрсөн огноо (YYYY/MM/DD)*</Label>
                  <Input
                    id="birthDate"
                    type="date"
                    {...register("birthDate")}
                    className={`w-full ${
                      errors.birthDate ? "border-red-500" : ""
                    }`}
                  />
                  {errors.birthDate && (
                    <p className="text-sm text-red-500">
                      {errors.birthDate.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="gender">Хүйс*</Label>
                  <select
                    id="gender"
                    className={`w-full p-2 border rounded-md ${
                      errors.gender ? "border-red-500" : ""
                    }`}
                    {...register("gender")}
                  >
                    <option value="">Сонгох</option>
                    <option value="male">Эрэгтэй</option>
                    <option value="female">Эмэгтэй</option>
                  </select>
                  {errors.gender && (
                    <p className="text-sm text-red-500">
                      {errors.gender.message}
                    </p>
                  )}
                </div>
              </>
            )}
            <div className="flex flex-col gap-2 justify-center items-center">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#828282] text-xs pl-1">
                  Нэвтрэх нэр, утасны дугаар эсвэл мэйл хаяг
                  {mode === "register" && "*"}
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="И-мэйл хаяг"
                  {...register("email")}
                  className={`w-full ${errors.email ? "border-red-500" : ""}`}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="text-[#828282] text-xs pl-1"
                >
                  Нууц үг{mode === "register" && "*"}
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Нууц үг"
                    {...register("password")}
                    className={`w-full ${
                      errors.password ? "border-red-500" : ""
                    }`}
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
                  <p className="text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>

            {mode === "register" && (
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Нууц үг давтах*</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Нууц үг давтах"
                  {...register("confirmPassword")}
                  className={`w-full ${
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

            {mode === "register" && (
              <>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" {...register("terms")} />
                  <Label htmlFor="terms" className="text-sm">
                    Би бүх журам, дүрмийг хүлээн зөвшөөрч байна
                  </Label>
                </div>
                {errors.terms && (
                  <p className="text-sm text-red-500">{errors.terms.message}</p>
                )}
              </>
            )}
          </CardContent>

          <CardFooter className="flex flex-col gap-4">
            <Button
              type="submit"
              className="w-[160px] bg-[#FD902E] hover:bg-[#F57C00]"
              disabled={isLoading}
            >
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {mode === "login" ? "Нэвтрэх" : "Бүртгэл үүсгэх"}
            </Button>

            <div className="relative w-full">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <button className="bg-background px-2 text-muted-foreground">
                  Нууц үг сэргээх
                </button>
              </div>
            </div>

            <p className="text-center text-sm">
              {mode === "login" ? (
                <>
                  <Button
                    type="submit"
                    className="w-[250px] bg-[#811AE0] hover:bg-[#6C13B3]"
                    onClick={() => router.push("/register")}
                  >
                    Бүртгүүлэх
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    type="submit"
                    className="w-[250px] bg-[#811AE0] hover:bg-[#6C13B3]"
                    onClick={() => router.push("/login")}
                  >
                    Нэвтрэх
                  </Button>
                </>
              )}
            </p>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" type="button" className="w-full">
                <Image
                  src="/image copy 3.png"
                  alt="Facebook"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                <div className="text-[#828282]">Sign in with Facebook</div>
              </Button>
              <Button variant="outline" type="button" className="w-full">
                <Image
                  src="/image copy 2.png"
                  alt="Google"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                <div className="text-[#828282]">Sign in with Google</div>
              </Button>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
