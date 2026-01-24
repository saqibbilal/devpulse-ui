import Image from 'next/image';

export default function HeadShot() {
    return (
        <div className="w-full h-full rounded-full bg-white/10 border-2 lg:border-4 border-white overflow-hidden shadow-2xl relative">
            <Image
                src="/headshot.jpg" // 1. Place your photo in the /public folder
                alt="Muhammad Saqib Bilal"
                fill
                priority // 2. Critical: This is a Hero image, load it immediately
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 500px"
            />
        </div>
    );
}