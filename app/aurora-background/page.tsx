import { AuroraBackground } from "@/components/ui/aurora-background";
import { ExternalLink } from "lucide-react";
import { Link } from "next-view-transitions";

export default function AuroraPage() {
  return (
    <AuroraBackground>
      <div className="relative space-y-4">
        <h1 className="text-4xl font-bold text-white">Hello</h1>

        <p>
          <a
            href="https://21st.dev/aceternity/aurora-background/default"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            https://21st.dev/aceternity/aurora-background/default
            <ExternalLink className="inline-block ml-2" size={16} />
          </a>
        </p>

        <p>
          <Link href="/" className="text-blue-500 hover:underline ">
            Go back
          </Link>
        </p>
      </div>
    </AuroraBackground>
  );
}
