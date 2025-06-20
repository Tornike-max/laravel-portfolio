import { NavItem } from "@/types";
import { Brain, Contact, Folder, Github, Home, Laptop, Linkedin, User, FileQuestionIcon } from "lucide-react";

export const mainNavItems: NavItem[] = [

    {
        id: 'home',
        title: 'Home',
        href: '/dashboard',
        icon: Home,
    },
    {
        id: 'about',
        title: 'About',
        href: 'admin-secret/about',
        icon: User,
    },
    // {
    //     title: 'Dashboard',
    //     href: '/dashboard',
    //     icon: LayoutGrid,
    // },
    {
        id: 'work',
        title: 'Work',
        href: '/work',
        icon: Laptop,
    },
    {
        id: 'skills',  
        title: 'Skills',
        href: '/admin-secret/skills',
        icon: Brain,
    },
    {
        id: 'testimonials',  
        title: 'Testimonials',
        href: '/testimonial',
        icon: FileQuestionIcon,
    },
    {
        id: 'contact',
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