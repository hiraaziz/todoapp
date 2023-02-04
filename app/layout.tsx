import ChakraWrapper from "@/component/ChakraUI/chakraui"

export default function RootLayout({
  children,
}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head />
      <body>
          <ChakraWrapper>
            {children}
          </ChakraWrapper>
      </body>
    </html>
  )
}
