import { Navbar } from "@/components";

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center p-24">
        <span className="text-4xl font-bold">Hola mundo</span>
        {children} 
      </main>
    </>
  );
}