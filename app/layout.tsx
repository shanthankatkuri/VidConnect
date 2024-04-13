import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster"
import '@stream-io/video-react-sdk/dist/css/styles.css';
import 'react-datepicker/dist/react-datepicker.css'

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VidConnect",
  description: "Connections made easy",
  icons: {
    icon: 'icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        layout:{
          logoImageUrl: '/icons/yoom-logo.svg'
        },
      }}
    >
      <html lang="en">
        <body className={'${inter.className} bg-dark-2'}>
          {children}
          <Toaster/>
        </body>
      </html>
    </ClerkProvider>
  );
}
