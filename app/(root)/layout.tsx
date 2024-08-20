import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: 'Rusty', lastName: 'Chase'}
  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar user={loggedIn}/>
        {children}
        <Footer />
    </main>
  );
}
