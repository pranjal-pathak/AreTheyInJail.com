import "./globals.css"
import localFont from "next/font/local"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ContributeButton from "./components/ContributeButton"
import { Plus_Jakarta_Sans } from 'next/font/google';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  weight: ['400', '700'], // Regular & Bold
});

// const suisse = localFont({
//   src: [
//     {
//       path: "../public/fonts/SuisseIntl-Regular.woff2",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../public/fonts/SuisseIntl-Bold.woff2",
//       weight: "700",
//       style: "normal",
//     },
//   ],
//   variable: "--font-suisse",
// })

export const metadata = {
  title: "AreTheyInJail.com - Exposing Powerful Criminals in India",
  description: "Uncover the truth about politicians and criminals evading justice in India",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // <html lang="en" className={`${suisse.variable}`}>
    <html lang="en" className={`${plusJakarta.variable}`}>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow relative jail-background">
          <div className="relative z-10">{children}</div>
        </main>
        <Footer />
        <ContributeButton />
      </body>
    </html>
  );
}

