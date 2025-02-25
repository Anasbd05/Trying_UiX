import type {Metadata} from "next";
import {Raleway} from "next/font/google";
import "./globals.css";


const releway = Raleway({
  subsets: ['latin']
})


export const metadata: Metadata = {
  title: "Generate Images",
  description: "Generated Images from Images ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true"
        className={`${releway.className} bg-background antialiased`}
      >
        {children}
      </body>
    </html >
  );
}
