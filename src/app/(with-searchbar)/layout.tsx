import SearchBar from "@/components/SearchBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SearchBar />
      {children}
    </>
  );
}
