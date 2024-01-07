import Button from "@/components/Button/Button";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Link href="/generate">
        <Button>Head to generate</Button>
      </Link>
    </div>
  );
}
