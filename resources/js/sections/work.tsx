import FilterProjects from '@/components/filter-projects'

const Work = () => {
  return (
   <section className="flex h-full flex-col gap-4 rounded-xl p-4">
      <div className="flex items-center justify-center h-full">
            <div className="max-w-2xl text-center">
                <h1 className="text-4xl font-bold mb-4 flex flex-col gap-3">
                    <span>
                        My {' '}
                        <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                            Creative
                        </span>
                    </span>
                    <span>
                        Portfolio{' '}
                        <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                            Section
                        </span>
                    </span>
                </h1>
            </div>

           
        </div>
        <FilterProjects />
    </section>
  )
}

export default Work