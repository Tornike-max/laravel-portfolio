import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { initializeTheme } from './hooks/use-appearance';
import  { Toaster } from 'react-hot-toast';
import React from 'react';


const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <React.Fragment>
                <Toaster
                    position="top-right"
                    reverseOrder={false}
                    toastOptions={{
                        className: 'bg-green-500 text-white',
                        style: {
                            fontSize: '0.875rem',
                            padding: '0.5rem 1rem',
                            borderRadius: '0.375rem',
                        },
                    }}
                />
                <App {...props} />
            </React.Fragment>
        );
    },
    progress: {
        color: '#4B5563',
    },
});

// This will set light / dark mode on load...
initializeTheme();
