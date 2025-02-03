/** @format */

import Image from "next/image";
import Link from "next/link";
import { Linkedin, Youtube, Instagram } from "lucide-react";

interface FooterColumn {
  title: string;
  links: {
    text: string;
    href: string;
  }[];
}

export default function Footer() {
  const columns: FooterColumn[] = [
    {
      title: "Topic",
      links: [
        { text: "Page", href: "#" },
        { text: "Page", href: "#" },
        { text: "Page", href: "#" },
      ],
    },
    {
      title: "Topic",
      links: [
        { text: "Бидний тухай", href: "#" },
        { text: "Page", href: "#" },
        { text: "Page", href: "#" },
      ],
    },
    {
      title: "Topic",
      links: [
        { text: "Page", href: "#" },
        { text: "Page", href: "#" },
        { text: "Page", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-[1fr,2fr] gap-8">
          {/* Logo and Social Links */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-2">
                <img
                  src="logo1.png"
                  alt="Entertainment.mn"
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
                <span className="text-xl font-medium">entertainment.mn</span>
              </div>
            </Link>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="grid grid-cols-3 gap-8">
            {columns.map((column, idx) => (
              <div key={idx}>
                <h3 className="font-medium text-gray-900 mb-4">
                  {column.title}
                </h3>
                <ul className="space-y-3">
                  {column.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link
                        href={link.href}
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-gradient-to-r from-orange-400 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <p className="text-white text-sm">
            2024 All rights reserved @Entertainment.mn
          </p>
        </div>
      </div>
    </footer>
  );
}
