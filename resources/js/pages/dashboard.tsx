import AppLayout from '@/layouts/app-layout';
import { Skill, TestimonialPaginatedResponse, Type, type BreadcrumbItem } from '@/types';
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



export default function Dashboard({skills,types,allskills,testimonials}:{ skills: Skill[],types:Type[],allskills:Skill[],testimonials:TestimonialPaginatedResponse }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />

            <section id="home">
                <FirstSection skills={skills} />
            </section>

            <section id="about">
                <About
                types={types.map((type) => ({
                    ...type,
                    description: type.description ?? '',
                }))}
                />
            </section>

            <section id="work">
                <Work />
            </section>

            <section id="skills">
                <Skills skills={allskills} />
            </section>

            <section id="testimonials">
                <Testimonials testimonials={testimonials} />
            </section>

            <section id="contact">
                <Contact />
            </section>

            <Footer />
        </AppLayout>
    );
}
