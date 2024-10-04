export const currencyVND = (num: number) => num.toLocaleString('vi-VN') + '₫';

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
