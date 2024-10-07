import { ELabel, EResultLabel, ETxtOnline, ICard } from 'types/Card';

export const ProductData: ICard[] = [
  {
    title: 'Iphone 16 Pro Max',
    labels: [{ label: ELabel.NORMAL, text: 'Trả góp 0%' }],
    // resultLabel: { text: 'Trả tước 0 đồng', type: EResultLabel.RED },
    tabs: ['6.9"', 'Super Retina XDR'],
    prodsGroup: ['256GB', '512GB', '1TB'],
    img: require('../assets/Product/1.jpg'),
    price: 34990000,
    // discount: {
    //   discountPercent: 50,
    //   OldPrice: 37900000,
    // },
    vote: {
      startRate: 4,
      totalVote: 12,
    },
  },
];
