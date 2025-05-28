import { NavItem } from "@/types";
import { Brain, Contact, Folder, Github, Home, Laptop, Linkedin, User } from "lucide-react";

export const mainNavItems: NavItem[] = [

    {
        title: 'Home',
        href: '/',
        icon: Home,
    },
    {
        title: 'About',
        href: '/about',
        icon: User,
    },
    // {
    //     title: 'Dashboard',
    //     href: '/dashboard',
    //     icon: LayoutGrid,
    // },
    {
        title: 'Work',
        href: '/work',
        icon: Laptop,
    },
    {
        title: 'Skills',
        href: '/skills',
        icon: Brain,
    },
    // {
    //     title: 'Testimonials',
    //     href: '/testimonial',
    //     icon: Rows4,
    // },
    {
        title: 'Contact',
        href: '/contact',
        icon: Contact,
    },
];

export const rightNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/Tornike-max/laravel-portfolio',
        icon: Folder,
    },
    {
        title: 'Github',
        href: 'https://github.com/Tornike-max',
        icon: Github,
    },
    {
        title: 'Linkedin',
        href: 'https://www.linkedin.com/in/tornike-ozbetelashvili-1732b2205/',
        icon: Linkedin,
    },
    // {
    //     title: 'Documentation',
    //     href: 'https://laravel.com/docs/starter-kits#react',
    //     icon: BookOpen,
    // },
];