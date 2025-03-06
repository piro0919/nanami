// eslint-disable-next-line filenames/match-exported
import "ress";
import Layout from "./_components/Layout";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  description: "七海りぃです🐰",
  title: "七海りぃ - 公式サイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.JSX.Element {
  return (
    <html lang="ja">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
