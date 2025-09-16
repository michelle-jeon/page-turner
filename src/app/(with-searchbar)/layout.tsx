import SearchBar from "@/components/DummySearchBar";

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
