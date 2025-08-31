import { useEffect } from 'react'
import WhatsAppButton from './WhatsAppButton'

function injectScript(id: string, src: string, inner?: string) {
  if (document.getElementById(id)) return
  const s = document.createElement('script')
  s.id = id
  if (src) s.src = src
  if (inner) s.innerHTML = inner
  s.async = true
  document.body.appendChild(s)
}

export default function SiteIntegrations() {
  // Google Analytics (GA4)
  useEffect(() => {
    const gaId = import.meta.env.VITE_GA_ID as string | undefined
    if (!gaId) return
    if (!document.getElementById('ga4-base')) {
      const gtagSrc = `https://www.googletagmanager.com/gtag/js?id=${gaId}`
      injectScript('ga4-base', gtagSrc)
      injectScript('ga4-init', '', `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gaId}');
      `)
    }
  }, [])

  // Live chat (Crisp or Tidio)
  useEffect(() => {
    const provider = (import.meta.env.VITE_CHAT_PROVIDER || '').toLowerCase()
    if (provider === 'crisp') {
      const siteId = import.meta.env.VITE_CRISP_WEBSITE_ID as string | undefined
      if (!siteId) return
      if (!(window as any).$crisp) (window as any).$crisp = []
      ;(window as any).CRISP_WEBSITE_ID = siteId
      injectScript('crisp-chat', 'https://client.crisp.chat/l.js')
    } else if (provider === 'tidio') {
      const pubKey = import.meta.env.VITE_TIDIO_PUBLIC_KEY as string | undefined
      if (!pubKey) return
      injectScript('tidio-chat', `https://code.tidio.co/${pubKey}.js`)
    }
  }, [])

  const phone = import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined

  return (
    <>
      {phone ? <WhatsAppButton phone={phone} /> : null}
    </>
  )
}

// TS window extras
declare global {
  interface Window {
    $crisp: any
    CRISP_WEBSITE_ID: string
  }
}
