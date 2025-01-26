import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { ExternalLink } from "lucide-react";
import { Link } from "next-view-transitions";

export default function FlickeringPage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <FlickeringGrid
        className="z-0 absolute inset-0 size-full"
        squareSize={6}
        gridGap={8}
        color="#6B7280"
        maxOpacity={0.4}
        flickerChance={0.1}
      />

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-[500px]">
        <h1 className="text-4xl font-bold relative">Hello</h1>
        <div className="relative h-[500px] rounded-lg w-full bg-background overflow-hidden border flex items-center justify-center">
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-bold">World</h2>

            <p>
              <a
                href="https://21st.dev/magicui/flickering-grid/default"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                https://21st.dev/magicui/flickering-grid/default
                <ExternalLink className="inline-block ml-2" size={16} />
              </a>
            </p>
          </div>

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
