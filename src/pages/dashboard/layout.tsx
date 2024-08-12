import Link from 'next/link'

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
      <html>
        <head />
            <body>
                <ul>
                    <li>Home</li>
                    <li>Dashboard</li>
                    <li>Settings</li>
                </ul>
            </body>
      </html>
    )
}