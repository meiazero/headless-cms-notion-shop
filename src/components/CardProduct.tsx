import Image from "next/image";

export type Product = {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  isNew?: boolean;
};

interface CardProductProps extends Product { }

export function CardProduct({
  title,
  description,
  price,
  imageUrl,
  isNew = false
}: CardProductProps) {
  return (
    <div className="group relative w-full max-w-[350px] overflow-hidden rounded-xl bg-neutral-950">
      <div className="absolute right-5 top-0 h-px w-80 bg-gradient-to-l from-transparent via-white/30 via-10% to-transparent" />
      <div className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100" />
      <div className="relative flex flex-col gap-3 rounded-xl border border-white/10 px-4 py-5">
        <div className="space-y-2">
          <Image
            src={imageUrl || "/products/fallback.png"}
            alt="Product image"
            width={320}
            height={240}
            className="h-60 w-full rounded-xl object-cover"
          />
          <div className="flex flex-row items-center justify-between pt-2">
            <h3 className="text-xl font-semibold text-neutral-200">
              {title || "Product Title"}
              {
                isNew && (
                  <span className="rounded-full bg-emerald-950 text-emerald-500 px-2 py-0.5 ms-2 text-xs font-medium">
                    New
                  </span>
                )
              }
            </h3>
            <p className="select-none text-xl text-neutral-300 font-semibold">
              ${new Intl.NumberFormat().format(price || 0)}
            </p>
          </div>
            <p className="pb-3 text-sm text-neutral-400 truncate">
              {description || "Product description"}
            </p>
          <button className="inline-flex w-full items-center justify-center gap-1 rounded-lg bg-zinc-50 px-4 py-3 text-sm font-semibold text-black duration-300 hover:bg-zinc-50/70">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
