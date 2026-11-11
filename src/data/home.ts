import breakfast from '../assets/1284.jpg'
import butter from '../assets/24835242_xxl.jpg'
import shellfish from '../assets/fresh-quahogs-chatham-cape-cod.jpg'
import gift from '../assets/Homemade cadeaubonnen.jpg'
import herbs from '../assets/Lander_kopbanner reserveren 2.jpg'
import garden from '../assets/landerhuys-garden.jpg'
import breakfastFish from '../assets/Landerhuys_ontbijt_visdag.jpg'
import suggestions from '../assets/Landerhuys_suggesties oktober 26.jpg'

export interface Destination { label: string, href: string }
export const business = {
  name: 'Het Landerhuys',
  telephone: '+32 11 28 31 00',
  phoneHref: 'tel:+3211283100',
  street: 'Kampweg 65',
  locality: '3582 Stal - Koersel',
  vat: 'BE0661.967.491',
  directions: 'https://www.google.com/maps/search/?api=1&query=%22het%20Landerhuys%2C%20Kampweg%2065%2C%203582%20Stal%20-%20Koersel%2C%20Belgium%22',
}
export const links = {
  reservation: 'https://landerhuys.be/contact',
  specials: 'https://landerhuys.be/over',
  gift: 'https://landerhuys.be/menu',
  jobs: 'https://landerhuys.be/vacatures',
  menu: 'https://landerhuys.be/onewebmedia/Lander_najaar%2026%20site%20menu.pdf',
  wine: 'https://landerhuys.be/onewebmedia/Lander_najaar%2026%20site%20wijn.pdf',
}
export const navigation: Destination[] = [
  { label: 'HOME', href: '/' },
  { label: 'RESERVEREN', href: links.reservation },
  { label: 'SPECIALS', href: links.specials },
  { label: 'CADEAUBON', href: links.gift },
  { label: 'VACATURES', href: links.jobs },
]
export const copy = {
  introHeading: 'Ons restaurant',
  intro: [
    'Onze gerechten zijn een weerspiegeling van de ingrediënten en de verhalen die deze creaties vertellen. Wij nodigen u uit om deze culinaire reis met ons te delen.',
    'Ervaar hoe goed eten bedoeld is, met selecties van de beste ingrediënten en met seizoensgebonden fruit en groenten.',
  ],
  menuHeading: 'Ons menu - klik hier',
  menu: ['Genieten van ons uitgebreide menu met veel keuze, wij koken graag voor u.', 'Laat uw smaakpapillen verwennen door een gezellige sfeer in ons restaurant.'],
  wineHeading: 'Een wijntje erbij - klik hier',
  wine: ['Wij verwennen u met een breed scala aan wijnen om van te genieten.', 'Ontdek onze uitgebreide selectie!'],
  reservationHeading: 'Een tafel reserveren',
  reservation: 'Reserveer gemakkelijk voor een heerlijke culinaire ervaring. Geniet van onze smaakvolle gerechten en suggesties in ons restaurant, orangerie of op het terras.',
  payment: ['BIJ ONS BETAAL JE VEILIG, SNEL EN EENVOUDIG MET JE SMARTPHONE!', 'SCAN DE QR CODE, BEVESTIG EN KLAAR.'],
  hoursHeading: 'Openingstijden',
  hours: ['woe. - don. - vrij - zat. vanaf 11u30', 'zondag vanaf 8u30', 'maandag & dinsdag gesloten'],
  kitchen: 'keuken doorlopend open tot 21u',
}
export const photography = {
  garden,
  herbs,
  shellfish,
  breakfast,
  butter,
  gift,
}
export const promotions = [
  {
    id: 'suggesties',
    image: suggestions,
    original: '/promotions/suggesties-oktober-2026.jpg',
    title: 'wild van Het Landerhuys',
    alt: 'Suggesties: wild van Het Landerhuys. De volledige inhoud staat ook onder de afbeelding.',
    transcript: [
      'wild van Het Landerhuys',
      'suggesties',
      'Hertenfilet | €35.60',
      'sausje van oude port',
      'Hertenstoofpotje | €28.70',
      'peperkoekaroma | winterse garnituur',
      'Caldeirada | €34.60',
      'Portugees visstoofpotje',
      'Paccheri | €23.90',
      'knapperige groentjes | pesto | veggie',
      'Kampweg 65 | B-3582 Stal-Koersel',
      't 011/28 31 00 | www.landerhuys.be',
      'vraag naar onze kadobon',
    ],
  },
  {
    id: 'ontbijt-visdag',
    image: breakfastFish,
    original: '/promotions/ontbijt-visdag.jpg',
    title: 'Ontbijtbuffet Royal in Het Landerhuys',
    alt: 'Elke zondag ontbijtbuffet Royal en vrijdag visdag. De volledige inhoud staat ook onder de afbeelding.',
    transcript: [
      'creatieve koppen in Het Landerhuys',
      'Elke zondag',
      'ontbijtbuffet Royal',
      'Reservatie gewenst',
      'Vanaf 8u30 tot 11u30',
      'Vrijdag is visdag',
      'Vismenu | €26.90',
      'Visschotel | €22.90',
    ],
  },
]
export const additionalLinks = [
  {
    label: 'Ontbijtbuffet Royal in Het Landerhuys',
    href: links.specials,
    image: breakfast,
    alt: 'Croissants, fruit en ontbijtgranen',
  },
  {
    label: 'Onze cadeaubonnen',
    href: links.gift,
    image: gift,
    alt: 'De cadeaubonnen van Het Landerhuys',
  },
  {
    label: 'Vacatures',
    href: links.jobs,
    image: shellfish,
    alt: 'Detail van verse schelpdieren',
  },
]
