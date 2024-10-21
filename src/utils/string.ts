export const currencyVND = num => {
  if (typeof num === 'string') {
    num = parseFloat(num);
  }

  if (typeof num !== 'number' || isNaN(num)) {
    return '0₫';
  }

  const formattedNum = Number.isInteger(num) ? num.toString() : num.toFixed(2);
  return parseFloat(formattedNum).toLocaleString('vi-VN') + '₫';
};

export const removeVietnameseTones = (str: string) => {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase();
};

export const onlyAllowNumbers = e => {
  const charCode = e.which ? e.which : e.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    e.preventDefault();
  }
};

export const formatPhoneNumber = value => {
  const onlyNumbers = value.replace(/\D/g, '');

  return onlyNumbers.replace(/(\d{1})(?=\d)/g, '$1 ');
};

// export const createQueryString = (
//   params: Record<string, string | number>,
// ): string => {
//   const stringifiedParams: Record<string, string> = Object.fromEntries(
//     Object.entries(params).map(([key, value]) => [key, String(value)]),
//   );

//   return new URLSearchParams(stringifiedParams).toString();
// };

export const createQueryString = (params: Record<string, any>): string => {
  return Object.entries(params)
    .map(([key, value]) => {
      if (typeof value === 'object' && !Array.isArray(value)) {
        // Nếu giá trị là object, chuyển thành chuỗi JSON
        return `${encodeURIComponent(key)}=${encodeURIComponent(
          JSON.stringify(value),
        )}`;
      }
      return `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`;
    })
    .join('&');
};

export const convertToJSON = data => {
  return JSON.stringify(data);
};

export const isValidPhoneNumber = phoneNumber => {
  // Xóa bỏ tất cả các khoảng trắng và ký tự không phải số
  const cleanedPhoneNumber = phoneNumber.replace(/\s+/g, '');

  // Kiểm tra xem số điện thoại có đúng 10 số và bắt đầu bằng số 0
  const phoneRegex = /^0\d{9}$/;

  return phoneRegex.test(cleanedPhoneNumber);
};
