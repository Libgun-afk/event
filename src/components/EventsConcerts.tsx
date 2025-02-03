/** @format */

"use client";

import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Clock,
  MapPin,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Artist {
  id: string;
  name: string;
  rating: number;
  price: string;
  imageUrl: string;
}

interface Event {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  venue: string;
  imageUrl: string;
}
const artists2: Artist[] = [
  {
    id: "3",
    name: "Гүзээлзгэнэтэй бялуу",
    rating: 3,
    price: "3.000.000₮",
    imageUrl: "uilchilgee1.png",
  },
  {
    id: "4",
    name: "Гадаа тайз",
    rating: 4,
    price: "3.500.000₮",
    imageUrl: "uilchilgee2.png",
  },
  {
    id: "5",
    name: "Гадаа тайз",
    rating: 4,
    price: "3.500.000₮",
    imageUrl: "uilchilgee3.png",
  },
];
const artists1: Artist[] = [
  {
    id: "1",
    name: "LED 8.5mm дэлгэц",
    rating: 4,
    price: "5.000.000₮",
    imageUrl: "uilchilgee.png",
  },
  {
    id: "2",
    name: "Гүзээлзгэнэтэй бялуу",
    rating: 4,
    price: "3.000.000₮",
    imageUrl: "uilchilgee1.png",
  },
  {
    id: "3",
    name: "Гүзээлзгэнэтэй бялуу",
    rating: 3,
    price: "3.000.000₮",
    imageUrl: "uilchilgee1.png",
  },
  {
    id: "4",
    name: "Гадаа тайз",
    rating: 4,
    price: "3.500.000₮",
    imageUrl: "uilchilgee2.png",
  },
  {
    id: "5",
    name: "Гадаа тайз",
    rating: 4,
    price: "3.500.000₮",
    imageUrl: "uilchilgee3.png",
  },
];
const artists: Artist[] = [
  {
    id: "1",
    name: "Bold",
    rating: 4,
    price: "5.000.000₮",
    imageUrl: "ontsloh5.png",
  },
  {
    id: "2",
    name: "Nene",
    rating: 4,
    price: "3.000.000₮",
    imageUrl: "ontsloh3.png",
  },
  {
    id: "3",
    name: "Young M'G",
    rating: 3,
    price: "3.000.000₮",
    imageUrl: "ontsloh2.png",
  },
  {
    id: "4",
    name: "Thunder",
    rating: 4,
    price: "3.500.000₮",
    imageUrl: "ontsloh1.png",
  },
  {
    id: "5",
    name: "Foux",
    rating: 4,
    price: "3.500.000₮",
    imageUrl: "ontsolh.png",
  },
];

const upcomingEvents: Event[] = [
  {
    id: "1",
    title: "Seryoja - Summer Sluts",
    subtitle: "",
    date: "2024.12.10",
    time: "19:00",
    venue: "Shangri-La Ballroom",
    imageUrl: "concert1.png",
  },
  {
    id: "2",
    title: "BOLD - 24 concert",
    subtitle: "",
    date: "2024.10.10",
    time: "19:00",
    venue: "Shangri-La Ballroom",
    imageUrl: "/perfume (1).png",
  },
];

export default function EventsConcerts() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [countdown, setCountdown] = useState({
    Өдөр: 0,
    Цаг: 0,
    Минут: 0,
    Секунд: 0,
  });

  const featuredEvent = {
    id: "1",
    title: "The Perfume Night",
    subtitle: "Нэгдсэн шинэ жил",
    date: "2025-02-12T19:00:00", // Set the event date in ISO format
    imageUrl: "concert.png",
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const eventDate = new Date(featuredEvent.date).getTime();
      const now = new Date().getTime();
      const timeLeft = eventDate - now;

      if (timeLeft <= 0) {
        clearInterval(interval);
        setCountdown({ Өдөр: 0, Цаг: 0, Минут: 0, Секунд: 0 });
        return;
      }

      setCountdown({
        Өдөр: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
        Цаг: Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        Минут: Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
        Секунд: Math.floor((timeLeft % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-8xl mx-auto px-24 py-8">
      <div className="relative rounded-2xl overflow-hidden mb-8">
        <div className="flex flex-col justify-between items-center mb-4">
          <h1 className="text-4xl font-bold text-purple-900">
            Events & Concerts
          </h1>
          <span className="text-gray-500">Upcoming</span>
        </div>
        <div className="relative aspect-[2/1]">
          <img
            src={featuredEvent.imageUrl || "/placeholder.svg"}
            alt={featuredEvent.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center justify-between p-8">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-2">{featuredEvent.title}</h2>
              <p className="text-xl">{featuredEvent.subtitle}</p>
            </div>
            <div className="text-right">
              <div className="flex gap-3 mb-4">
                {Object.entries(countdown).map(([unit, value]) => (
                  <div
                    key={unit}
                    className="bg-white/20 backdrop-blur  px-3 py-2 rounded"
                  >
                    <div className="text-2xl font-bold text-white">{value}</div>
                    <div className="text-xs text-white/80">{unit}</div>
                  </div>
                ))}
              </div>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                BUY TICKET
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {upcomingEvents.map((event) => (
          <div
            key={event.id}
            className="relative rounded-xl overflow-hidden group cursor-pointer"
          >
            <img
              src={event.imageUrl || "/placeholder.svg"}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
              <div className="absolute bottom-0 w-full p-4 text-white">
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <div className="flex gap-4 text-sm text-white/80">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {event.venue}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mb-4 flex flex-col justify-between items-center">
        <h2 className="text-2xl font-bold text-purple-900">
          Онцлох уран бүтээлчид
        </h2>
        <span className="text-gray-500">Энэ сарын</span>
      </div>

      <div className="relative">
        <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-purple-600/80 hover:bg-purple-600 rounded-full flex items-center justify-center text-white">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-purple-600/80 hover:bg-purple-600 rounded-full flex items-center justify-center text-white">
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="flex justify-between overflow-x-auto pb-6 -mx-2 px-2 scroll-smooth">
          {artists.map((artist) => (
            <div
              key={artist.id}
              className="flex-none bg-black/90 rounded-xl w-[250px] group"
            >
              <div className="relative">
                <div className="absolute top-2 left-2 bg-purple-600 text-white text-xs px-2 py-1 rounded">
                  ON SALE
                </div>
                <img
                  src="Logo.png"
                  alt={artist.name}
                  className="w-12 h-4 aspect-square absolute top-4 right-2 object-cover "
                />
              </div>
              <img
                src={artist.imageUrl || "/placeholder.svg"}
                alt={artist.name}
                className="w-full aspect-square mt-12 object-cover rounded-full"
              />
              <div className="mt-3 text-center">
                <h3 className="font-bold text-white">{artist.name}</h3>
                <div className="flex justify-center gap-1 my-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-sm ${
                        i < artist.rating ? "text-orange-400" : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-600">{artist.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex ml-16 my-24">
        <img src="leasing.png" alt="" />
      </div>
      <div className="mb-4 flex flex-col justify-between items-center">
        <h2 className="text-2xl font-bold text-purple-900">
          Онцлох үйлчилгээ{" "}
        </h2>
        <span className="text-gray-500">Энэ сарын</span>
      </div>

      <div className="relative">
        <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-purple-600/80 hover:bg-purple-600 rounded-full flex items-center justify-center text-white">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-purple-600/80 hover:bg-purple-600 rounded-full flex items-center justify-center text-white">
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="flex justify-between overflow-x-auto pb-6 -mx-2 px-2 scroll-smooth">
          {artists1.map((artist) => (
            <div
              key={artist.id}
              className="flex-none bg-white rounded-xl w-[250px] group"
            >
              <div className="relative">
                <div className="absolute top-2 left-2 bg-purple-600 text-white text-xs px-2 py-1 rounded">
                  ON SALE
                </div>
                <img
                  src="uilchilgee1.png"
                  alt={artist.name}
                  className="w-12 h-4 aspect-square absolute top-4 right-2 object-cover "
                />
              </div>
              <img
                src={artist.imageUrl || "/placeholder.svg"}
                alt={artist.name}
                className="w-full aspect-square mt-12 object-contain"
              />
              <div className="mt-3 text-center">
                <h3 className="font-bold text-black">{artist.name}</h3>
                <div className="flex justify-center gap-1 my-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-sm ${
                        i < artist.rating ? "text-orange-400" : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-600">{artist.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex ml-16 my-24">
        <img src="hymdral.png" alt="" />
      </div>
      <div className="mb-4 flex flex-col justify-between items-center">
        <h2 className="text-2xl font-bold text-purple-900">
          Онцлох үйлчилгээ{" "}
        </h2>
        <span className="text-gray-500">Энэ сарын</span>
      </div>

      <div className="relative">
        <div className="flex justify-between gap-2 pb-6">
          <div className="flex lr-[200px] w-[500px]">
            <img src="perfume.png" alt="" />
          </div>
          {artists2.map((artist, index) => (
            <div
              key={artist.id}
              className={`bg-white rounded-xl w-[300px] ${
                index === 0 ? "md:col-span-1" : "col-span-1"
              } group`}
            >
              <div className="relative">
                <div className="absolute top-2 left-2 bg-purple-600 text-white text-xs px-2 py-1 rounded">
                  ON SALE
                </div>
                <img
                  src="Logo.png"
                  alt={artist.name}
                  className="w-12 h-4 aspect-square absolute top-4 right-2 object-cover "
                />
              </div>
              <img
                src={artist.imageUrl || "/placeholder.svg"}
                alt={artist.name}
                className="w-full aspect-square  object-contain"
              />
              <div className="mt-3 text-center">
                <h3 className="font-bold text-black">{artist.name}</h3>
                <p className="text-gray-600">{artist.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative mt-12">
        <div className="flex justify-between gap-2 pb-6">
          <div className="flex lr-[200px] w-[500px]">
            <img src="chicken.png" alt="" />
          </div>
          {artists2.map((artist, index) => (
            <div
              key={artist.id}
              className={`bg-white rounded-xl w-[300px] ${
                index === 0 ? "md:col-span-1" : "col-span-1"
              } group`}
            >
              <div className="relative">
                <div className="absolute top-2 left-2 bg-purple-600 text-white text-xs px-2 py-1 rounded">
                  ON SALE
                </div>
                <img
                  src="Logo.png"
                  alt={artist.name}
                  className="w-12 h-4 aspect-square absolute top-4 right-2 object-cover "
                />
              </div>
              <img
                src={artist.imageUrl || "/placeholder.svg"}
                alt={artist.name}
                className="w-full aspect-square  object-contain"
              />
              <div className="mt-3 text-center">
                <h3 className="font-bold text-black">{artist.name}</h3>
                <p className="text-gray-600">{artist.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex ml-16 my-24">
        <img src="hymdral2.png" alt="" />
      </div>
      <div className="relative">
        <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-purple-600/80 hover:bg-purple-600 rounded-full flex items-center justify-center text-white">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-purple-600/80 hover:bg-purple-600 rounded-full flex items-center justify-center text-white">
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="flex justify-between overflow-x-auto pb-6 -mx-2 px-2 scroll-smooth">
          {artists1.map((artist) => (
            <div
              key={artist.id}
              className="flex-none bg-white rounded-xl w-[250px] group"
            >
              <div className="relative">
                <div className="absolute top-2 left-2 bg-purple-600 text-white text-xs px-2 py-1 rounded">
                  ON SALE
                </div>
                <img
                  src="Logo.png"
                  alt={artist.name}
                  className="w-12 h-4 aspect-square absolute top-4 right-2 object-cover "
                />
              </div>
              <img
                src={artist.imageUrl || "/placeholder.svg"}
                alt={artist.name}
                className="w-full aspect-square mt-12 object-contain"
              />
              <div className="mt-3 text-center">
                <h3 className="font-bold text-black">{artist.name}</h3>
                <div className="flex justify-center gap-1 my-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-sm ${
                        i < artist.rating ? "text-orange-400" : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-600">{artist.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative mt-12">
        <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-purple-600/80 hover:bg-purple-600 rounded-full flex items-center justify-center text-white">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-purple-600/80 hover:bg-purple-600 rounded-full flex items-center justify-center text-white">
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="flex justify-between overflow-x-auto pb-6 -mx-2 px-2 scroll-smooth">
          {artists1.map((artist) => (
            <div
              key={artist.id}
              className="flex-none bg-white rounded-xl w-[250px] group"
            >
              <div className="relative">
                <div className="absolute top-2 left-2 bg-purple-600 text-white text-xs px-2 py-1 rounded">
                  ON SALE
                </div>
                <img
                  src="Logo.png"
                  alt={artist.name}
                  className="w-12 h-4 aspect-square absolute top-4 right-2 object-cover "
                />
              </div>
              <img
                src={artist.imageUrl || "/placeholder.svg"}
                alt={artist.name}
                className="w-full aspect-square mt-12 object-contain"
              />
              <div className="mt-3 text-center">
                <h3 className="font-bold text-black">{artist.name}</h3>
                <div className="flex justify-center gap-1 my-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-sm ${
                        i < artist.rating ? "text-orange-400" : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-600">{artist.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
