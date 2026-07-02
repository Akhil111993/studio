import "./globals.css";

export const metadata = {
  title: "Akhil V S — Senior Software Engineer",
  description:
    "Senior software engineer building reliable Flutter applications across Android, iOS, and web, with experience in healthcare, AI, commerce, and cloud delivery.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
