import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import { Analytics } from '@vercel/analytics/next'
 
export const metadata = {
}
 
// const banner = <Banner storageKey="some-key">Nextra 4.0 is released 🎉</Banner>
const navbar = (
  <Navbar
    logo={<h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Zezinhol Docs <span style={{ fontSize: "12px", fontWeight: "100"
    }}>By Robert Luiz</span></h1>}
  />
)
const footer = <Footer>Desenvolvido por Robert Luiz</Footer>
 
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      dir="ltr"
      suppressHydrationWarning
    >
      <Analytics />
      <Head
      >
      </Head>
      <body>
        <Layout
          // banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/robertlsc2016/zezinhol-docs"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}