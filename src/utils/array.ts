import { ICate } from 'app/pages/MyHomePage/slice/type';

// 1 full -1 half 0 empty
export const generateStars = (rating: number) => {
  const stars = [0, 0, 0, 0, 0];

  for (let i = 0; i < 5; i++) {
    if (rating >= i + 1) {
      stars[i] = 1;
    } else if (rating > i && rating < i + 1) {
      stars[i] = -1;
    }
  }

  return stars;
};

export const processCate = (cate: ICate[]) => {
  if (cate.length > 8) {
    const halfLength = cate.length / 2;

    const [firstHalf, secondHalf] = [
      cate.slice(0, Math.ceil(halfLength)),
      cate.slice(Math.ceil(halfLength)),
    ];

    return [firstHalf, secondHalf];
  }

  return [[...cate], []];
};
