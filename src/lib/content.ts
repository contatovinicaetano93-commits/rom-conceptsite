export type SalonUnit = {
  id: string
  accent: 'brasil' | 'iguatemi'
  shortName: string
  name: string
  location: string
  address: string
  floor?: string
  cep: string
  phone: string
  instagram: string
  description: string
  highlights: string[]
  hours: string
  image: string
  mapQuery: string
  whatsapp: string
  whatsappText: string
}

export const HERO_IMAGES = [
  {
    src: 'https://twoarquitetura.com.br/wp-content/uploads/2023/12/T222227.jpg',
    alt: 'Vista ampla do salão — ROM Concept Jardins',
  },
  {
    src: 'https://twoarquitetura.com.br/wp-content/uploads/2023/12/T222241.jpg',
    alt: 'Cadeiras e espelhos iluminados — ROM Concept',
  },
  {
    src: 'https://twoarquitetura.com.br/wp-content/uploads/2023/12/T222204.jpg',
    alt: 'Estações de atendimento — ROM Concept Av. Brasil',
  },
  {
    src: 'https://twoarquitetura.com.br/wp-content/uploads/2023/12/T221950.jpg',
    alt: 'Ambiente premium do salão — ROM Concept',
  },
  {
    src: 'https://twoarquitetura.com.br/wp-content/uploads/2023/12/T221964.jpg',
    alt: 'Interior minimalista — ROM Concept',
  },
] as const

export const stats = [
  { value: 'Guinness', label: 'Maior salão de beleza do mundo · 2024' },
  { value: '337 cadeiras', label: '227 na Av. Brasil + 110 no Iguatemi' },
  { value: '5.800 m²', label: '4.000 m² Av. Brasil + 1.800 m² Iguatemi' },
  { value: '02', label: 'Unidades · Jardins e Shopping Iguatemi' },
] as const

export const services = [
  { category: 'Cabelo', name: 'Corte e styling' },
  { category: 'Cabelo', name: 'Coloração e mechas criativas' },
  { category: 'Tratamento', name: 'Spa capilar e tratamentos' },
  { category: 'Make', name: 'Maquiagem' },
  { category: 'Unhas', name: 'Manicure e nail art' },
  { category: 'Estética', name: 'Design de sobrancelha e cílios' },
  { category: 'Pele', name: 'Clínica de dermatologia' },
  { category: 'Bem-estar', name: 'Massagem e bem-estar' },
] as const

export const brand = {
  promise:
    'Beleza não é tendência de feed. É engenharia de cor, corte e experiência — com padrão Guinness em cada detalhe.',
  manifesto:
    'Fundado em 2019 por Romeu Felipe e Henrique Rocha, o ROM Concept é o maior salão de beleza do mundo pelo Guinness World Records — juntando as duas unidades, são 5.800 m² e 337 cadeiras em São Paulo: 4.000 m² e 227 cadeiras na Av. Brasil (Jardins) e 1.800 m² e 110 cadeiras no Shopping Iguatemi.',
  vision:
    'Promover saúde, beleza, bem-estar e autoestima com amor, respeito e excelência — do Jardim Paulista ao Iguatemi.',
  founder: 'Romeu Felipe · co-fundador ROM Concept · educador Wella · Guinness World Records',
  partners: ['Wella Professionals', 'Truss', "L'Oréal", 'Braé'],
} as const

export const salons: SalonUnit[] = [
  {
    id: 'brasil',
    accent: 'brasil',
    shortName: 'Brasil',
    name: 'ROM Concept · Av. Brasil',
    location: 'Jardim Paulista · Jardins',
    address: 'Av. Brasil, 126 — Jardim Paulista',
    cep: '01430-000',
    phone: '(11) 2892-0096',
    instagram: 'https://www.instagram.com/rom.concept',
    description:
      'A unidade original — 4 mil m², 227 cadeiras, cerca de 300 profissionais e ~200 clientes atendidos por dia. Título Guinness World Records 2024. Referência em mechas criativas, coloração e experiência completa de beleza.',
    highlights: [
      'Maior salão de beleza do mundo · Guinness 2024',
      '227 cadeiras · ~300 profissionais · ~200 atendimentos/dia',
      'Cabeleireiros, coloristas, maquiadores e spa capilar',
      'Clínica de dermatologia e bistro com chef no local',
    ],
    hours: 'Terça a sábado · 9h às 21h',
    image: 'https://twoarquitetura.com.br/wp-content/uploads/2023/12/T222227.jpg',
    mapQuery: 'ROM Concept Av. Brasil 126 Jardim Paulista São Paulo',
    whatsapp: '5511993021379',
    whatsappText: 'Olá! Quero agendar #SeuMomentoROM na unidade Av. Brasil.',
  },
  {
    id: 'iguatemi',
    accent: 'iguatemi',
    shortName: 'Iguatemi',
    name: 'ROM Concept · Iguatemi',
    location: 'Shopping Iguatemi · Jardim Paulistano',
    address: 'Av. Brigadeiro Faria Lima, 2232',
    floor: 'Torre Frutas · 9º andar',
    cep: '01451-000',
    phone: '(11) 3815-0920',
    instagram: 'https://www.instagram.com/rom.iguatemi',
    description:
      'Inaugurada em dezembro de 2024 no Shopping Iguatemi — 1.800 m², 110 cadeiras e cerca de 200 profissionais, com a mesma excelência ROM. Projeto assinado pelo arquiteto Eduardo Pereira Gurian, design minimalista e industrial inspirado nos salões de Los Angeles.',
    highlights: [
      '9º andar · Torre Frutas · Shopping Iguatemi',
      '110 cadeiras · ~200 profissionais · inaugurada em dez/2024',
      'Coloração, mechas, manicure, maquiagem e spa',
      'Estacionamento e infraestrutura do mall',
    ],
    hours: 'Seg–sáb 10h–22h · dom e feriados 12h–20h',
    image: 'https://twoarquitetura.com.br/wp-content/uploads/2023/12/T222241.jpg',
    mapQuery: 'ROM Concept Shopping Iguatemi Av Brigadeiro Faria Lima 2232 São Paulo',
    whatsapp: '5511988600188',
    whatsappText: 'Olá! Quero agendar #SeuMomentoROM na unidade Iguatemi.',
  },
]

export function salonWhatsappUrl(salon: SalonUnit) {
  return `https://wa.me/${salon.whatsapp}?text=${encodeURIComponent(salon.whatsappText)}`
}

export function mapUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}
