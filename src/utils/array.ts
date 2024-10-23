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
