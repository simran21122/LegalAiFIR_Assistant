import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/contexts/theme-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "LegalAI FIR Assistant",
  description: "Your intelligent legal companion for FIR assistance and legal guidance",
 
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="system" storageKey="legalai-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
