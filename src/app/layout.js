import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./Components/NavBar";
import RecoilWrapper from "./Components/RecoilWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HOW 장애인 취업공고 추천",
  description: "HOW 장애인 맞춤형 취업 공고를 추천합니다.",
  icons: {
    icon: "/how-favicon.png",
  },
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
