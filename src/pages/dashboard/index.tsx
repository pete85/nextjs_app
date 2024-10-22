// src/pages/dashboard/index.tsx
import React from "react";
import Head from "next/head";
import Link from "next/link";

const DashboardPage: React.FC = () => {
    return (
        <>
            <Head>
                <title>Dashboard</title>
                <meta name="description" content="Dashboard overview page" />
            </Head>
            <div className="tw-px-8 tw-py-4">
                <h1 className="tw-text-3xl tw-font-bold tw-mb-4">Dashboard</h1>
                <p className="tw-mb-4">
                    Welcome to the Dashboard. Here you can find an overview of your activities and performance.
                </p>
                <nav className="tw-mb-8">
                    <ul className="tw-space-y-2">
                        <li>
                            <Link href="/dashboard/profile" className="tw-text-blue-500 hover:tw-underline">
                                Go to Profile
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/settings" className="tw-text-blue-500 hover:tw-underline">
                                Go to Settings
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="tw-bg-gray-100 tw-p-4 tw-rounded-md">
                    {/* Example content */}
                    <h2 className="tw-text-2xl tw-font-semibold">Overview Section</h2>
                    <p>Here you can display charts, stats, or other information.</p>
                </div>
            </div>
        </>
    );
};

export default DashboardPage;
