import Image from "next/image";
import Link from "next/link";
import { PORTFOLIO_ITEMS } from "./consts";

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-4 pt-20 pb-10 sm:px-6 lg:px-8">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {PORTFOLIO_ITEMS.map((item) => {
            return (
              <Link
                href={`/work/${item.slug}`}
                key={item.id}
                className="group relative block break-inside-avoid"
              >
                <div className="relative group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    placeholder="blur"
                    className="rounded-lg w-full"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="rounded-lg absolute inset-0 flex items-center justify-center bg-white/0 transition-colors duration-300 group-hover:bg-white/80">
                    <span className="text-black text-lg font-bold opacity-0 transition-opacity duration-300 group-hover:opacity-100 uppercase">
                      {item.title}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
