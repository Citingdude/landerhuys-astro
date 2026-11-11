import type { APIRoute } from 'astro'

export const GET: APIRoute = ({ site }) => {
  const indexable = import.meta.env.PROD && import.meta.env.PUBLIC_INDEXABLE === 'true'
  const rules = indexable
    ? `User-agent: *\nAllow: /\nSitemap: ${new URL('/sitemap.xml', site).href}\n`
    : 'User-agent: *\nDisallow: /\n'
  return new Response(rules, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
