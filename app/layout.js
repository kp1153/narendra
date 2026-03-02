import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "नरेंद्र कंप्यूटर्स | वाराणसी",
  description: "प्रिंटिंग, फ्लेक्स, डिजिटल, ऑफसेट, आई-कार्ड — वाराणसी कैंट",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <body style={{ margin: 0, background: "#0a0a0f", display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}