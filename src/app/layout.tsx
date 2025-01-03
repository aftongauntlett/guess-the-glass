// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "Guess The Glass",
  description: "A modern app using TailwindCSS and Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-800">
        <header className="bg-blue-600 text-white p-4 shadow-md">
          <h1 className="text-2xl font-bold text-center">Guess The Glass</h1>
        </header>
        <main className="container mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
