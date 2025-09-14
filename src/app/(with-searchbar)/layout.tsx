import SearchBar from "@/components/SearchBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: "1rem", borderBottom: "1px solid #ddd" }}>
        </header>
        <SearchBar />
        {children}
      </body>
    </html>
  );
}
