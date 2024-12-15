import { OrderStatus } from 'auth/type';

export const BASE_URL = 'https://kltn-huit-production.up.railway.app';

// export const BASE_URL = 'http://localhost:3001';
export const iconProps = {
  1: { position: '-140px -25px', height: '11px', width: '12px' },
  0: { position: '-160px -25px', height: '11px', width: '12px' },
};

export const StatusColors = {
  [OrderStatus.Pending]: '#f5a623', // Vàng cam
  [OrderStatus.Processing]: '#2a9df4', // Xanh dương
  [OrderStatus.Returned]: '#d0021b', // Đỏ
  [OrderStatus.Canceled]: '#9b9b9b', // Xám
  [OrderStatus.Completed]: '#1cac53', // Xanh lá
};
