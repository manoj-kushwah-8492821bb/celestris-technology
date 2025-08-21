import { NextResponse } from "next/server";

const MenuData = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Projects",
    path: "/projects",
    newTab: false,
  },
  {
    id: 4,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 5,
    title: "Services",
    path: "/#services",
    newTab: false,
  },
  {
    id: 6,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];

const footerData = {
  name: "Celestris Technology",
  tagline: "Build something together?",
  info: [
    {
      icon: "/images/footer/email-arrow.svg",
      link: "info@wrappixel.com",
      href: "https://www.wrappixel.com/",
    },
    {
      icon: "/images/footer/Location.svg",
      link: "Zwolle Netherlands",
      href: "https://maps.app.goo.gl/hpDp81fqzGt5y4bC8",
    },
  ],
  links: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/#services" },
    { name: "Work", href: "/projects" },
    { name: "Terms", href: "/terms-and-conditions" },
    { name: "Privacy Policy", href: "/privacy-policy" },
  ],
  socialLinks: [
    { name: "Facebook", href: "https://www.facebook.com/" },
    { name: "Instagram", href: "https://www.instagram.com/" },
    { name: "Twitter", href: "https://x.com/" },
  ],
  copyright: "© Celestris Technology copyright 2024",
};

export const GET = async () => {
  return NextResponse.json({
    footerData,
    MenuData,
  });
};
