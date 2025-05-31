import AppLayout from '@/layouts/app-layout';
import { Skill, Type, type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

import FirstSection from '@/sections/firstSection';
import About from '@/sections/about';
import Work from '@/sections/work';
import Skills from '@/sections/skills';
import Testimonials from '@/sections/testimonials';
import Contact from '@/sections/Contact';
import Footer from '@/sections/Footer';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];



export default function Dashboard({skills,types}:{ skills: Skill[],types:Type[] }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <FirstSection skills={skills}/>
            <About types={types}/>
            <Work />
            <Skills />
            <Testimonials />
            <Contact />
            <Footer />
        </AppLayout>
    );
}
