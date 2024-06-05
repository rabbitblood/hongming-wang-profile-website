import Footer from "@/components/organism/Footer/Footer";
import Header from "@/components/organism/Header/Header";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
