import { Countdown } from "./components/Countdown";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
      <h1 className="text-white">Hello</h1>
      <Countdown />
    </main>
  );
}
