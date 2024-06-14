import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./Components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HOW 취업로드맵",
  description: "공공데이터 활용 공모전",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
