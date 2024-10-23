"use client";

import Image from "next/image";
import { useRouter } from 'next/navigation';
import {useState} from "react";

export default function Home() {
    const [location, setLocation] = useState('');
    const router = useRouter();
    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault(); // Prevent page reload
        if (location) {
            router.push(`/weather?q=${location}`); // Navigate to /weather?q=location
        }
    };

    return (
        <div
            className="tw-grid tw-grid-rows-[20px_1fr_20px] tw-items-center tw-justify-items-center tw-min-h-screen tw-pb-20 tw-gap-16 tw-font-[family-name:var(--font-geist-sans)]">
            <main className="tw-flex tw-flex-col tw-gap-8 tw-row-start-2 tw-items-center sm:tw-items-start">

                <div className="tw-flex tw-items-center tw-flex-col sm:tw-flex-row">
                    <form onSubmit={handleSearch} className="tw-flex tw-flex-col md:tw-flex-row tw-gap-4 tw-justify-center tw-items-center tw-w-full">
                        <input
                            type="text"
                            placeholder="Enter location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)} // Update location state
                            className="tw-p-2 tw-border tw-rounded tw-text-slate-900 tw-max-w-[80%]" // Add your preferred Tailwind classes
                        />
                        <button type="submit"
                                className="tw-bg-blue-500 tw-text-white tw-px-4 tw-py-2 tw-rounded tw-w-full tw-max-w-[80%]">
                            Search
                        </button>
                    </form>
                </div>
            </main>
            <footer className="tw-row-start-3 tw-flex tw-gap-6 tw-flex-wrap tw-items-center tw-justify-center">
                <a
                    className="tw-flex tw-items-center tw-gap-2 hover:tw-underline hover:tw-underline-offset-4"
                    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="https://nextjs.org/icons/file.svg"
                        alt="File icon"
                        width={16}
                        height={16}
                    />
                    Learn
                </a>
                <a
                    className="tw-flex tw-items-center tw-gap-2 hover:tw-underline hover:tw-underline-offset-4"
                    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="https://nextjs.org/icons/window.svg"
                        alt="Window icon"
                        width={16}
                        height={16}
                    />
                    Examples
                </a>
                <a
                    className="tw-flex tw-items-center tw-gap-2 hover:tw-underline hover:tw-underline-offset-4"
                    href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="https://nextjs.org/icons/globe.svg"
                        alt="Globe icon"
                        width={16}
                        height={16}
                    />
                    Go to nextjs.org →
                </a>
            </footer>
        </div>
    );
}
