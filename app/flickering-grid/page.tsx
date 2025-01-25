import { FlickeringGrid } from "@/components/ui/flickering-grid";
import Link from "next/link";

export default function FlickeringPAge() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <FlickeringGrid
        className="z-0 absolute inset-0 size-full"
        squareSize={6}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1}
      />

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-[500px]">
        <h1 className="text-4xl font-bold">Hello</h1>
        <div className="relative h-[500px] rounded-lg w-full bg-background overflow-hidden border flex items-center justify-center">
          <h2 className="text-3xl font-bold">World</h2>

          <Link
            href="/"
            className="absolute bottom-4 right-4 text-blue-500 hover:underline"
          >
            Go back
          </Link>
        </div>
      </main>
    </div>
  );
}
