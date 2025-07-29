import Image from "next/image";
import { Countdown } from "./components/Countdown";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <Image
        src="/images/fold.jpeg"
        alt="Background"
        fill
        priority
        className="object-cover z-[-1]"
      />

      <h1 className="text-black text-4xl text-center md:text-[3.6rem] mb-4">Countdown to Carnage</h1>
      <Countdown />
    </main>
  );
}
