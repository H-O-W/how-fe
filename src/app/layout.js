import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./Components/NavBar";
import RecoilWrapper from "./Components/RecoilWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HOW 취업로드맵",
  description: "공공데이터 활용 공모전 출품작",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <RecoilWrapper>
          <NavBar />
          {children}
        </RecoilWrapper>
      </body>
    </html>
  );
}
