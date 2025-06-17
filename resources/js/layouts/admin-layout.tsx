import { type BreadcrumbItem } from '@/types';
import { type ReactNode } from 'react';
import AppSidebarLayout from './app/app-sidebar-layout';

interface AdminLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default ({ children, breadcrumbs, ...props }: AdminLayoutProps) => (
    <AppSidebarLayout breadcrumbs={breadcrumbs} {...props}>
        {children}
    </AppSidebarLayout>
);
