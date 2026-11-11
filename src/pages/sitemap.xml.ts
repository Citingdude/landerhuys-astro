import type { APIRoute } from 'astro'
import { navigation } from '../data/home'

export const GET: APIRoute = ({ site }) => {
  const urls = navigation.map(({ href }) => `<url><loc>${new URL(href, site).href}</loc></url>`).join('')
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  })
}
