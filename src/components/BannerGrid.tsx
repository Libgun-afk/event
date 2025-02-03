/** @format */

import Link from "next/link";
interface Banner {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  link: string;
}
const banners: Banner[] = [
  {
    id: "1",
    title: "ХУРИМ",
    subtitle: "ЦОГЦ ҮЙЛЧИЛГЭЭ",
    imageUrl: "Banner1.png",
    link: "/wedding",
  },
  {
    id: "2",
    title: "ХҮҮХДИЙН ТОГЛОЛТ",
    subtitle: "ТӨРСӨН ӨДӨР, СЭВЛЭГ ҮРГЭЭХ ЁСЛОЛ",
    imageUrl: "Banner2.png",
    link: "/kids",
  },
  {
    id: "3",
    title: "ШИНЭ ЖИЛИЙН БАЯР",
    subtitle: "ЦОГЦ ҮЙЛЧИЛГЭЭ",
    imageUrl: "Banner3.png",
    link: "/new-year",
  },
];
export function BannerGrid() {
  return (
    <div className="w-full flex py-8">
      {" "}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {" "}
        {banners.map((banner) => (
          <Link
            key={banner.id}
            href={banner.link}
            className="relative overflow-hidden  rounded-lg"
          >
            {" "}
            <img
              src={banner.imageUrl || "/placeholder.svg"}
              alt={banner.title}
              className="object-cover transition-transform w-[3500px] group-hover:scale-105"
            />{" "}
          </Link>
        ))}{" "}
      </div>{" "}
    </div>
  );
}
