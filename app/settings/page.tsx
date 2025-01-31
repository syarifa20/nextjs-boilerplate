"use client";
import { useRouter } from "next/navigation";

export default function NavigationPage() {
  const router = useRouter();

  return (
    <div>
      <h1>Navigation Example</h1>
      <button onClick={() => router.push("/about")}>
       Halaman about
      </button>
    </div>
  );
}
