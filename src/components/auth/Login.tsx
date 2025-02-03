/** @format */

"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: Record<string, any>) => {
    console.log("Нэвтрэх мэдээлэл:", data);
  };

  const images = ["/image copy.png", "/perfume.png", "/image copy.png"];

  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000); // 3 секунд тутамд зураг солигдоно

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      {/* Left side */}
      <Card className="relative hidden md:flex md:w-[464px] h-auto md:h-[600px] flex-col items-center justify-center bg-orange-400 text-white">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">
            Бүх төрлийн төхөөрөмжөөс хялбар ашиглах боломжтой
          </CardTitle>
          <CardDescription className="text-white/80">
            Fully Responsive
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4 w-full flex flex-col items-center">
          <div className="relative w-full h-64 mb-8">
            {images.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Preview ${index}`}
                fill
                className={`object-contain w-[352px] h-[235px] transition-opacity duration-500 ${
                  activeImage === index ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>

          <div className="relative w-32 h-32">
            <Image
              src="/image copy 4.png"
              alt="QR Code"
              fill
              className="object-contain"
            />
          </div>

          {/* Товчлуурууд */}
          <div className="flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  activeImage === index ? "bg-white" : "bg-white/50"
                }`}
                onClick={() => setActiveImage(index)}
              />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Right side */}
      <Card className="w-full max-w-xl h-[600px] flex flex-col justify-center items-center p-4 shadow-xl">
        <CardHeader className="flex flex-col items-center">
          <Image
            src="/image.png"
            alt="Entertainment.mn"
            width={180}
            height={40}
            className="object-contain"
          />
          <CardTitle>Нэвтрэх / Login</CardTitle>
          <CardDescription>Хэрэглэгчээр, харилцагчаар нэвтрэх</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Label htmlFor="email">Нэвтрэх нэр</Label>
              <Input
                id="email"
                type="email"
                placeholder="Имэйл хаяг"
                {...register("email", { required: "Нэвтрэх нэр эсвэл Имэйл" })}
                className={`w-full p-2 border rounded-md ${
                  errors.email ? "border-red-500" : "border-gray-200"
                }`}
              />
              {errors.email && (
                <p className="text-sm text-red-500">
                  {errors.email.message?.toString()}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="password">Нууц үг</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Нууц үг"
                  {...register("password", { required: "Нууц үг оруулна уу!" })}
                  className={`w-full p-2 border rounded-md ${
                    errors.password ? "border-red-500" : "border-gray-200"
                  }`}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className=" absolute right-2 top-1/2 -translate-y-1/2"
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
                  {errors.password.message?.toString()}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full p-2 bg-orange-400 text-white rounded-md hover:bg-orange-500 transition duration-200"
            >
              Нэвтрэх
            </Button>

            <div className="text-center">
              <button
                type="button"
                className="text-sm text-gray-500 underline"
                onClick={() => router.push("/forgot-password")}
              >
                Нууц үг сэргээх
              </button>
            </div>

            <Button
              className="w-full bg-[#811AE0] hover:bg-[#6C13B3]"
              onClick={() => router.push("/register")}
            >
              Бүртгүүлэх
            </Button>

            <div className="grid grid-cols-2 gap-4">
              <Button
                variant="outline"
                type="button"
                className="w-full flex items-center gap-2"
              >
                <Image
                  src="/image copy 3.png"
                  alt="Facebook"
                  width={20}
                  height={20}
                />
                <span className="text-[#828282]">Facebook</span>
              </Button>
              <Button
                variant="outline"
                type="button"
                className="w-full flex items-center gap-2"
              >
                <Image
                  src="/image copy 2.png"
                  alt="Google"
                  width={20}
                  height={20}
                />
                <span className="text-[#828282]">Google</span>
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
