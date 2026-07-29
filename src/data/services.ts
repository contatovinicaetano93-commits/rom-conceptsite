export type ServiceItem = {
  category: string
  name: string
  description: string
}

export const SERVICES: ServiceItem[] = [
  {
    category: 'Cabelo',
    name: 'Corte e styling',
    description:
      'Corte personalizado e finalização com o padrão ROM — do dia a dia ao editorial.',
  },
  {
    category: 'Cabelo',
    name: 'Coloração e mechas criativas',
    description:
      'Método Romeu Felipe para cabelo brasileiro: cor, luz e dimensão com precisão.',
  },
  {
    category: 'Tratamento',
    name: 'Spa capilar e tratamentos',
    description:
      'Reconstrução, hidratação e cuidado intensivo para saúde e movimento do fio.',
  },
  {
    category: 'Make',
    name: 'Maquiagem',
    description:
      'Make social ou editorial, alinhada ao look e à ocasião — com acabamento ROM.',
  },
  {
    category: 'Unhas',
    name: 'Manicure e nail art',
    description:
      'Manicure cuidada e nail art sob medida, com atenção a forma, cor e detalhe.',
  },
  {
    category: 'Estética',
    name: 'Design de sobrancelha e cílios',
    description:
      'Design e realce que equilibram o rosto sem perder naturalidade.',
  },
  {
    category: 'Pele',
    name: 'Clínica de dermatologia',
    description:
      'Cuidado clínico no salão — pele e cabelo no mesmo oásis de sofisticação.',
  },
  {
    category: 'Bem-estar',
    name: 'Massagem e bem-estar',
    description:
      'Pausas de bem-estar para completar a experiência #SeuMomentoROM.',
  },
]

export const SERVICE_MARQUEE_ITEMS = SERVICES.map((service) => service.name)
