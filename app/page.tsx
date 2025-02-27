import SustainsLogo from '@/app/ui/SustainsLogo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col p-6">
            {/* Header Section */}
            <div className="flex h-20 shrink-0 items-end rounded-lg bg-[#0ABF53] p-4 md:h-52">
                <SustainsLogo />
            </div>

            {/* Main Content Section */}
            <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
                {/* Left Side */}
                <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
                    {/* Triangle Indicator */}
                    <div className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black" />

                    {/* Welcome Text */}
                    <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
                        <strong>Welcome to Sandbox.</strong> We are a platform for risk management, brought to you by Sustains.ai.
                    </p>

                    {/* Login Button */}
                    <Link
                        href="/login"
                        className="flex items-center gap-5 self-start rounded-lg bg-[#0ABF53] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
                    >
                        <span>Log in</span>
                        <ArrowRightIcon className="w-5 md:w-6" />
                    </Link>
                </div>

                {/* Right Side (For Images or Hero Section) */}
                <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
                    {/* Add Hero Images Here */}
                    <Image
                        src="/stock_3.jpg"
                        width={1000}
                        height={760}
                        className="hidden md:block"
                        alt="The main stock photo of the dashboard project"
                    />
                    <Image
                        src="/stock_1.jpg"
                        width={560}
                        height={620}
                        className="block md:hidden"
                        alt="Risk profile"
                    />
                </div>
            </div>
        </main>
    );
}
