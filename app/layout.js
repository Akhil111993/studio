import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata = {
  title: "Akhil V S — Senior Software Engineer",
  description:
    "Senior software engineer building reliable mobile and web products with experience in healthcare, AI, commerce, APIs, and cloud delivery.",
  icons: {
    icon: `${basePath}/logo_akhil.png`,
    apple: `${basePath}/logo_akhil.png`,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
