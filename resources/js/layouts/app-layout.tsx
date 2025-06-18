import { type BreadcrumbItem } from '@/types';
import { type ReactNode } from 'react';
import AppHeaderLayout from './app/app-header-layout';
import { usePage } from '@inertiajs/react';
import AppSidebarLayout from './app/app-sidebar-layout';

interface AppLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default ({ children, breadcrumbs, ...props }: AppLayoutProps) => {
    const path = usePage().url;

    if(path.includes("admin-secret")){
        return (
        <AppSidebarLayout key={1} breadcrumbs={breadcrumbs} {...props}>
            {children}
        </AppSidebarLayout>
        )
    }else{
        return (
        <AppHeaderLayout key={2} breadcrumbs={breadcrumbs} {...props}>
            {children}
        </AppHeaderLayout>
    );
    }
    
};
