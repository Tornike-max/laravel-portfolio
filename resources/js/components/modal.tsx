import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    DialogTitle,
} from '@headlessui/react'
import { useForm } from '@inertiajs/react'
import { useState } from 'react';
import { IoStar } from "react-icons/io5";
import { useDropzone } from 'react-dropzone'


export default function Modal({
    setOpen,
    open,
}: {
    setOpen: (open: boolean) => void
    open: boolean
}) {
    const { post, processing, setData, errors, data, reset } = useForm<{
        name: string
        testimonial: string
        rating: number
        image: File | null
        position: string
        company: string
    }>({
        name: '',
        testimonial: '',
        rating: 5,
        image: null,
        position: '',
        company: '',
    })
    const [hoverRating, setHoverRating] = useState<number | null>(null)

    const onDrop = (acceptedFiles: File[]) => {
        if (acceptedFiles.length > 0) {
            setData('image', acceptedFiles[0])
        }
    }

        const {
        getRootProps,
        getInputProps,
        isDragActive,
    } = useDropzone({
        onDrop,
        accept: { 'image/*': [] },
        multiple: false,
    })

    const handleClose = () => {
        setOpen(false)
        reset()
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        post(route("testimonials.store"), {
            onSuccess: () => {
                handleClose()
            },
        })
    }

    const preview = data.image ? URL.createObjectURL(data.image) : null


    return (
        <Dialog open={open} onClose={handleClose} className="relative z-10">
            <DialogBackdrop className="fixed inset-0 bg-black/90" />
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <DialogPanel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-[#0a0a0a] p-6 text-left align-middle shadow-xl transition-all">
                        <DialogTitle className="text-lg font-bold text-gray-100 mb-4">
                            Create Testimonial
                        </DialogTitle>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-100">Name</label>
                                <input
                                    type="text"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    required
                                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-100">Position</label>
                                <input
                                    type="text"
                                    value={data.position}
                                    onChange={(e) => setData('position', e.target.value)}
                                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    placeholder="e.g. CEO"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-100">Company</label>
                                <input
                                    type="text"
                                    value={data.company}
                                    onChange={(e) => setData('company', e.target.value)}
                                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    placeholder="e.g. Apple"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-100">Comment</label>
                                <textarea
                                    value={data.testimonial}
                                    onChange={(e) => setData('testimonial', e.target.value)}
                                    required
                                    rows={4}
                                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    placeholder="Write your feedback..."
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-100 mb-1">Rating</label>
                                <div className="flex items-center space-x-1">
                                    {[1, 2, 3, 4, 5].map((r) => (
                                        <button
                                            key={r}
                                            type="button"
                                            onClick={() => setData('rating', r)}
                                            onMouseEnter={() => setHoverRating(r)}
                                            onMouseLeave={() => setHoverRating(null)}
                                            className="transition-transform hover:scale-110 cursor-pointer focus:outline-none"
                                            aria-label={`Rate ${r} stars`}
                                        >
                                            <IoStar
                                                className={`w-6 h-6 ${(hoverRating ?? data.rating) >= r ? 'fill-yellow-400' : 'fill-gray-300'
                                                    }`}
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-100 mb-1">Photo</label>

                                <div
                                    {...getRootProps()}
                                    className={`mt-1 flex items-center justify-center border-2 border-dashed rounded-md p-4 cursor-pointer transition ${
                                        isDragActive ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300'
                                    }`}
                                >
                                    <input {...getInputProps()} />
                                    {data.image ? (
                                        <div className="text-center">
                                            <img
                                                src={preview || ""}
                                                alt="Preview"
                                                className="max-h-32 mx-auto mb-2 rounded"
                                            />
                                            <p className="text-sm text-gray-300">{data.image?.name}</p>
                                        </div>
                                    ) : (
                                        <p className="text-sm text-gray-400">Drag & drop an image here, or click to select</p>
                                    )}
                                </div>
                            </div>


                            {Object.keys(errors).length > 0 && (
                                <div className="text-red-500 text-sm">
                                    {Object.values(errors).map((err, i) => (
                                        <div key={i}>{err}</div>
                                    ))}
                                </div>
                            )}

                            <div className="mt-6 flex justify-end gap-3">
                                <button
                                    type="button"
                                    onClick={handleClose}
                                    className="rounded-md border border-gray-300 bg-slate-200 text-black px-4 py-2 text-sm font-medium cursor-pointer hover:bg-slate-300"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-2 text-sm font-medium cursor-pointer text-white hover:bg-indigo-500 disabled:opacity-50"
                                >
                                    {processing ? 'Saving...' : 'Save'}
                                </button>
                            </div>
                        </form>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}
