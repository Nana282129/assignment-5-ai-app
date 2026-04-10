import './globals.css';

export const metadata = {
  title: 'Insight Assistant',
  description: 'AI-powered insight application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}