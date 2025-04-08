import { Metadata } from 'next';
import { Inter } from 'next/font/google'
import ThemeRegistry from '@/components/ThemeRegistry';
import Header from '@/components/Header';
import { Box } from '@mui/material';

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'HeyFood Clone',
  description: 'A Next.js clone of HeyFood using Material UI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ margin: 0, padding: 0 }}>
        <ThemeRegistry>
          <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <Box component="main" sx={{ flexGrow: 1, display: 'flex' }}>
              {children}
            </Box>
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  )
}
