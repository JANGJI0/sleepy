import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "슬리피 | 브랜드 소개",
  description: "슬리피의 기업·브랜드 소개와 제품 안내 페이지입니다.",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
