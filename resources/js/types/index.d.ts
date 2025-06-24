import { LucideIcon } from 'lucide-react';
import type { Config } from 'ziggy-js';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    id?:string;
    title: string;
    href: string;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    ziggy: Config & { location: string };
    sidebarOpen: boolean;
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}

export interface Skill {
    name: string;
    slug?: string;
    icon?: LucideIcon | null;
    type?: Type;
}

export interface Type {
    id: number;
    type: string;
    description?: string;
}

export interface Testimonial {
    id: number;
    name: string;
    testimonial: string;
    image?: string;
    position: string;
    rating: number;
    is_approved?: boolean;
    created_at?: string;
    updated_at?: string;
    deleted_at?: string | null;
}


interface PaginationLink {
  url: string | null;
  label: string;
  active: boolean;
}

export interface TestimonialPaginatedResponse {
  current_page: number;
  data: Testimonial[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: PaginationLink[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}

export interface WorkTypes {
    id: number;
    title: string;
    description: string;
    image?: string;
    slug: string;
    type: Type;
    skills: Skill[];
    created_at: string;
    updated_at: string;
    deleted_at?: string | null;
    is_approved?: boolean;
}
