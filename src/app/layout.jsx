import "./globals.css";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
// HOST=
// PORT=3000

// NEXT_PUBLIC_API_URL=https://api.example.com
// SECRET_KEY=…
// SUPABASE_URL="https://aavlhbvzrvbhfcomjatu.supabase.co"
// SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhdmxoYnZ6cnZiaGZjb21qYXR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ1NjgxMzUsImV4cCI6MjA2MDE0NDEzNX0.q8aqYxiU7xU6rCAkqi9gmGqSJaVNJReZ_0F4vqFzIDg"

// NEXT_PUBLIC_SUPABASE_URL="https://aavlhbvzrvbhfcomjatu.supabase.co"
// NEXT_PUBLIC_SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhdmxoYnZ6cnZiaGZjb21qYXR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ1NjgxMzUsImV4cCI6MjA2MDE0NDEzNX0.q8aqYxiU7xU6rCAkqi9gmGqSJaVNJReZ_0F4vqFzIDg"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
