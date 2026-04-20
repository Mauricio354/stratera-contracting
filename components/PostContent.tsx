import Image from "next/image";
import Link from "next/link";
import type { ContentBlock } from "@/lib/posts";

export default function PostContent({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading": {
            if (block.level === 2) {
              return (
                <h2
                  key={i}
                  className="font-serif text-2xl md:text-3xl text-primary mt-10 mb-2"
                >
                  {block.text}
                </h2>
              );
            }
            return (
              <h3
                key={i}
                className="font-serif text-xl md:text-2xl text-primary mt-6 mb-1"
              >
                {block.text}
              </h3>
            );
          }
          case "paragraph":
            return (
              <p
                key={i}
                className="text-gray-700 text-[15px] leading-relaxed"
              >
                {block.text}
              </p>
            );
          case "list": {
            const items = block.items.map((it, j) => (
              <li key={j} className="text-gray-700 text-[15px] leading-relaxed">
                {it}
              </li>
            ));
            return block.style === "number" ? (
              <ol key={i} className="list-decimal pl-6 space-y-2">
                {items}
              </ol>
            ) : (
              <ul key={i} className="list-disc pl-6 space-y-2">
                {items}
              </ul>
            );
          }
          case "image":
            return (
              <figure key={i} className="my-8">
                <div className="relative w-full aspect-[16/9] rounded-card overflow-hidden">
                  <Image
                    src={block.src}
                    alt={block.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="object-cover"
                  />
                </div>
                {block.caption && (
                  <figcaption className="text-center text-gray-500 text-xs mt-3">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="border-l-4 border-accent pl-5 py-2 my-6 text-gray-700 italic"
              >
                <p className="text-[16px] leading-relaxed">{block.text}</p>
                {block.attribution && (
                  <cite className="block not-italic text-sm text-gray-500 mt-2">
                    {block.attribution}
                  </cite>
                )}
              </blockquote>
            );
          case "cta":
            return (
              <div
                key={i}
                className="my-8 bg-gray-100 border border-gray-200 rounded-card p-6 text-center"
              >
                <h3 className="font-serif text-xl text-primary mb-2">
                  {block.heading}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{block.body}</p>
                <Link href={block.href} className="btn btn-primary text-sm">
                  {block.label}
                </Link>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
