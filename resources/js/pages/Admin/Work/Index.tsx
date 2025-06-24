import AppLayout from "@/layouts/app-layout"
import { BreadcrumbItem, WorkTypes } from "@/types";
import { Head } from "@inertiajs/react"

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Projects',
    href: '/admin-secret/work',
  },
];

const Index = ({works}:{works:WorkTypes}) => {

  console.log(works)
  return (
     <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Admin Panel" />
        <section className="p-8 max-w-7xl w-full mx-auto">
            <h1 className="text-4xl font-bold text-center mb-10">
                <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                    Manage Your Projects
                </span>
            </h1>
        </section>
    </AppLayout>
  )
}

export default Index