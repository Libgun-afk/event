/** @format */

// /** @format */

// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaYoutube,
//   FaSearch,
//   FaRegHeart,
//   FaShoppingCart,
//   FaHeadset,
// } from "react-icons/fa";
// import Image from "next/image";

// export default function Header() {
//   const [searchQuery, setSearchQuery] = useState("");

//   return (
//     <header className="w-full bg-white">
//       {/* Promotional Banner */}
//       <div className="bg-gradient-to-r from-orange-500 to-purple-700  text-white py-2">
//         <div className="container mx-auto px-4 flex justify-center items-center gap-2">
//           <span className="text-sm font-medium">
//             Хуримын урьдчилсан захиалга 20% off.
//           </span>
//           <Link
//             href="/details"
//             className="text-sm font-medium underline underline-offset-4 hover:no-underline transition-all"
//           >
//             Дэлгэрэнгүй
//           </Link>
//         </div>
//       </div>

//       {/* Top Bar */}
//       <div className="border-b">
//         <div className="container mx-auto px-4 py-2">
//           <div className="flex justify-between items-center">
//             {/* Social Media */}
//             <div className="flex items-center gap-4">
//               <Link
//                 href="https://facebook.com"
//                 className="text-gray-600 hover:text-[#FF007A] transition-colors"
//               >
//                 <FaFacebookF size={16} />
//               </Link>
//               <Link
//                 href="https://instagram.com"
//                 className="text-gray-600 hover:text-[#FF007A] transition-colors"
//               >
//                 <FaInstagram size={16} />
//               </Link>
//               <Link
//                 href="https://youtube.com"
//                 className="text-gray-600 hover:text-[#FF007A] transition-colors"
//               >
//                 <FaYoutube size={16} />
//               </Link>
//             </div>

//             {/* Top Navigation */}
//             <nav className="hidden md:flex items-center gap-6">
//               <Link
//                 href="/partner"
//                 className="text-sm text-gray-600 hover:text-[#FF007A] transition-colors"
//               >
//                 Хамтран ажиллах
//               </Link>
//               <Link
//                 href="/app"
//                 className="text-sm text-gray-600 hover:text-[#FF007A] transition-colors"
//               >
//                 Апп татах
//               </Link>
//               <Link
//                 href="/feedback"
//                 className="text-sm text-gray-600 hover:text-[#FF007A] transition-colors"
//               >
//                 Санал хүсэлт
//               </Link>
//               <Link
//                 href="/help"
//                 className="text-sm text-gray-600 hover:text-[#FF007A] transition-colors"
//               >
//                 Тусламж
//               </Link>
//             </nav>
//           </div>
//         </div>
//       </div>

//       {/* Main Header */}
//       <div className="container mx-auto px-4 py-4">
//         <div className="flex items-center justify-between gap-8">
//           {/* Logo */}
//           <Link href="/" className="shrink-0">
//             <Image
//               src="/image.png"
//               alt="Entertainment.mn"
//               width={180}
//               height={40}
//               className="h-10 w-auto"
//             />
//           </Link>

//           {/* Search Bar */}
//           <div className="flex-1 max-w-2xl">
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full px-4 py-2 border rounded-full focus:outline-none focus:border-[#FF007A] transition-colors"
//               />
//               <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#FF007A] transition-colors">
//                 <FaSearch size={16} />
//               </button>
//             </div>
//           </div>

//           {/* User Features */}
//           <div className="flex items-center gap-6">
//             <div className="flex items-center gap-2 text-gray-600 hover:text-[#FF007A] transition-colors cursor-pointer">
//               <FaHeadset size={20} />
//               <div className="hidden sm:block">
//                 <div className="text-xs font-medium">24/7</div>
//                 <div className="text-xs">Support</div>
//               </div>
//             </div>

//             <div className="flex items-center gap-2">
//               <motion.div whileHover={{ scale: 1.1 }} className="relative">
//                 <FaRegHeart
//                   size={20}
//                   className="text-gray-600 hover:text-[#FF007A] transition-colors cursor-pointer"
//                 />
//                 <span className="absolute -top-2 -right-2 bg-[#FF007A] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
//                   0
//                 </span>
//               </motion.div>
//               <motion.div whileHover={{ scale: 1.1 }} className="relative">
//                 <FaShoppingCart
//                   size={20}
//                   className="text-gray-600 hover:text-[#FF007A] transition-colors cursor-pointer"
//                 />
//                 <span className="absolute -top-2 -right-2 bg-[#FF007A] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
//                   0
//                 </span>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Navigation */}
//       <nav className="border-t">
//         <div className="container mx-auto px-4">
//           <ul className="flex items-center gap-8 py-4">
//             <li>
//               <Link
//                 href="/menu"
//                 className="text-gray-600 hover:text-[#FF007A] transition-colors"
//               >
//                 Үйлчилгээ
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/events"
//                 className="text-gray-600 hover:text-[#FF007A] transition-colors"
//               >
//                 Эвент захиалах
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/halls"
//                 className="text-gray-600 hover:text-[#FF007A] transition-colors"
//               >
//                 Тасалбар авах
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/wedding"
//                 className="text-gray-600 hover:text-[#FF007A] transition-colors"
//               >
//                 Урлагийн сургалт, багц захиалах
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/restaurant"
//                 className="text-gray-600 hover:text-[#FF007A] transition-colors"
//               >
//                 Ресторан захиалах
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </header>
//   );
// }

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Youtube,
  HeadphonesIcon,
  Heart,
  ShoppingCart,
  User,
  HandHeart,
  PackageOpen,
  CalendarCheck,
  Ticket,
  Utensils,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
export function Header() {
  return (
    <header className="bg-white">
      {" "}
      <div className="mx-auto px-12">
        {" "}
        <div className="flex items-center pt-4 justify-between py-3">
          {" "}
          <div className="flex gap-4">
            {" "}
            <a href="#" className="text-gray-500 hover:text-gray-700">
              {" "}
              <Facebook className="h-5 w-5" />{" "}
            </a>{" "}
            <a href="#" className="text-gray-500 hover:text-gray-700">
              {" "}
              <Instagram className="h-5 w-5" />{" "}
            </a>{" "}
            <a href="#" className="text-gray-500 hover:text-gray-700">
              {" "}
              <Youtube className="h-5 w-5" />{" "}
            </a>{" "}
          </div>{" "}
          <div className="flex gap-6 text-sm">
            {" "}
            <Link href="#" className="hover:text-purple-600">
              {" "}
              Хамтран ажиллах{" "}
            </Link>{" "}
            <Link href="#" className="hover:text-purple-600">
              {" "}
              Download App{" "}
            </Link>{" "}
            <Link href="#" className="hover:text-purple-600">
              {" "}
              Санал хүсэлт{" "}
            </Link>{" "}
            <Link href="#" className="hover:text-purple-600">
              {" "}
              Тусламж{" "}
            </Link>{" "}
          </div>{" "}
        </div>{" "}
        <div className="flex items-center justify-between py-4">
          {" "}
          <Link href="/" className="flex-shrink-0">
            {" "}
            <img
              src="image.png"
              alt="Entertainment.mn"
              width={150}
              height={40}
              className="h-10 w-auto"
            />{" "}
          </Link>{" "}
          <div className="flex-1 max-w-xl mx-8">
            {" "}
            <div className="relative">
              {" "}
              <input
                type="search"
                placeholder="Search"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />{" "}
            </div>{" "}
          </div>{" "}
          <div className="flex items-center gap-6">
            {" "}
            <div className="flex items-center gap-2 text-purple-600">
              {" "}
              <HeadphonesIcon className="h-5 w-5" />{" "}
              <div className="text-xs leading-tight">
                {" "}
                <div>24/7</div> <div>support</div>{" "}
              </div>{" "}
            </div>{" "}
            <Button variant="ghost" size="icon">
              {" "}
              <Heart className="h-5 w-5" />{" "}
            </Button>{" "}
            <Button variant="ghost" size="icon">
              {" "}
              <ShoppingCart className="h-5 w-5" />{" "}
            </Button>{" "}
            <div className="flex items-center gap-2">
              {" "}
              <User className="h-5 w-5" />{" "}
              <div className="text-xs leading-tight">
                {" "}
                <Link href="/login" className="text-purple-600 hover:underline">
                  {" "}
                  Login{" "}
                </Link>{" "}
                <div>
                  {" "}
                  or{" "}
                  <Link
                    href="/register"
                    className="text-purple-600 hover:underline"
                  >
                    {" "}
                    register{" "}
                  </Link>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        {/* Navigation */}{" "}
        <nav className="flex gap-8 py-4 text-sm">
          {" "}
          <Link
            href="#"
            className="flex items-center gap-2 hover:text-purple-600"
          >
            {" "}
            <HandHeart /> <span>Үйлчилгээ</span>{" "}
          </Link>{" "}
          <Link
            href="#"
            className="flex items-center gap-2 hover:text-purple-600"
          >
            {" "}
            <PackageOpen /> <span>Бүтээгдэхүүн</span>{" "}
          </Link>{" "}
          <Link
            href="#"
            className="flex items-center gap-2 hover:text-purple-600"
          >
            {" "}
            <CalendarCheck /> <span>Эвент захиалах</span>{" "}
          </Link>{" "}
          <Link
            href="#"
            className="flex items-center gap-2 hover:text-purple-600"
          >
            {" "}
            <Ticket /> <span>Тасалбар авах</span>{" "}
          </Link>{" "}
          <Link
            href="#"
            className="flex items-center gap-2 hover:text-purple-600"
          >
            {" "}
            <GraduationCap /> <span>Урлагийн сургалт, багц захиалах</span>{" "}
          </Link>{" "}
          <Link
            href="#"
            className="flex items-center gap-2 hover:text-purple-600"
          >
            {" "}
            <Utensils /> <span>Ресторан захиалах</span>{" "}
          </Link>{" "}
        </nav>{" "}
      </div>{" "}
    </header>
  );
}
