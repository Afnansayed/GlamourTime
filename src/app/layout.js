
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/sheared/Navbar/Navbar.jsx";
import ReactQueryProvider from './ReactQueryProvider'

// Import custom fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// Initialize the query client for React Query


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-7xl mx-auto`}
      >
        {/* Wrap the whole app, including the Navbar, with QueryClientProvider */}
         <ReactQueryProvider>
          <Navbar />
          {children}
          </ReactQueryProvider>
      </body>
    </html>
  );
}
