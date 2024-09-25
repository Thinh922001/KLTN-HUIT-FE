import Img1 from '../assets/sub-menu-icon/1.1.png';

export interface SubMenuType {
  img: string;
  desc: string;
}

export interface MenuType {
  title: string;
  subMenus: SubMenuType[];
}

export const subMenuData = [
  {
    img: require('../assets/sub-menu-icon/1.1.png'),
    desc: 'Flash sale giảm đến 50%',
  },
  {
    img: require('../assets/sub-menu-icon/1.2.png'),
    desc: 'Hàng Cao cấp giảm đến 50%',
  },
  {
    img: require('../assets/sub-menu-icon/1.3.png'),
    desc: 'Máy nước nóng gảm đến 20%',
  },
  {
    img: require('../assets/sub-menu-icon/1.4.png'),
    desc: 'Mua lọc nước tặng lõi lọc',
  },
  {
    img: require('../assets/sub-menu-icon/1.5.png'),
    desc: 'mua bếp điện tặng bộ nồi',
  },
  {
    img: require('../assets/sub-menu-icon/1.6.png'),
    desc: 'Mua nồi cơm tặng bếp điện',
  },
  {
    img: require('../assets/sub-menu-icon/1.7.png'),
    desc: 'Mua Tv 55 tặng nồi đun',
  },
  {
    img: require('../assets/sub-menu-icon/1.8.png'),
    desc: 'mua nồi chiên tặng bộ hộp',
  },
];

export const MenuData: MenuType[] = [
  {
    title: 'Chương trình hot',
    subMenus: [
      {
        img: require('../assets/sub-menu-icon/1.1.png'),
        desc: 'Flash sale giảm đến 50%',
      },
      {
        img: require('../assets/sub-menu-icon/1.2.png'),
        desc: 'Hàng Cao cấp giảm đến 50%',
      },
      {
        img: require('../assets/sub-menu-icon/1.3.png'),
        desc: 'Máy nước nóng gảm đến 20%',
      },
      {
        img: require('../assets/sub-menu-icon/1.4.png'),
        desc: 'Mua lọc nước tặng lõi lọc',
      },
      {
        img: require('../assets/sub-menu-icon/1.5.png'),
        desc: 'mua bếp điện tặng bộ nồi',
      },
      {
        img: require('../assets/sub-menu-icon/1.6.png'),
        desc: 'Mua nồi cơm tặng bếp điện',
      },
      {
        img: require('../assets/sub-menu-icon/1.7.png'),
        desc: 'Mua Tv 55 tặng nồi đun',
      },
      {
        img: require('../assets/sub-menu-icon/1.8.png'),
        desc: 'mua nồi chiên tặng bộ hộp',
      },
    ],
  },
  {
    title: 'Điện tử, điện máy',
    subMenus: [
      {
        img: require('../assets/sub-menu-icon/2.1.png'),
        desc: 'Tivi',
      },
      {
        img: require('../assets/sub-menu-icon/2.2.png'),
        desc: 'Tủ lạnh',
      },
      {
        img: require('../assets/sub-menu-icon/2.3.png'),
        desc: 'Máy Lạnh',
      },
      {
        img: require('../assets/sub-menu-icon/2.4.png'),
        desc: 'Máy giặt',
      },
      {
        img: require('../assets/sub-menu-icon/2.5.png'),
        desc: 'Máy sấy quần áo',
      },
      {
        img: require('../assets/sub-menu-icon/2.6.png'),
        desc: 'Máy nước nóng',
      },
      {
        img: require('../assets/sub-menu-icon/2.7.png'),
        desc: 'Tủ mát',
      },
      {
        img: require('../assets/sub-menu-icon/2.8.png'),
        desc: 'Tủ đông',
      },
      {
        img: require('../assets/sub-menu-icon/2.9.png'),
        desc: 'Máy rửa chén',
      },
      {
        img: require('../assets/sub-menu-icon/2.10.png'),
        desc: 'Loa dàn âm thanh',
      },
      {
        img: require('../assets/sub-menu-icon/2.11.png'),
        desc: 'Micro',
      },
    ],
  },
  {
    title: 'Điện gia dụng',
    subMenus: [
      {
        img: require('../assets/sub-menu-icon/3.1.png'),
        desc: 'Máy lọc nước',
      },
      {
        img: require('../assets/sub-menu-icon/3.2.png'),
        desc: 'Bếp từ',
      },
      {
        img: require('../assets/sub-menu-icon/3.3.png'),
        desc: 'Bếp hồng ngoại',
      },
      {
        img: require('../assets/sub-menu-icon/3.4.png'),
        desc: 'Nồi cơm điện',
      },
      {
        img: require('../assets/sub-menu-icon/3.5.png'),
        desc: 'Nồi chiên không dầu',
      },
      {
        img: require('../assets/sub-menu-icon/3.6.png'),
        desc: 'Robot hút bụi',
      },
      {
        img: require('../assets/sub-menu-icon/3.7.png'),
        desc: 'Máy hút bụi',
      },
      {
        img: require('../assets/sub-menu-icon/3.8.png'),
        desc: 'Máy ép trái cây',
      },
      {
        img: require('../assets/sub-menu-icon/3.9.png'),
        desc: 'Máy xay sinh tố',
      },
      {
        img: require('../assets/sub-menu-icon/3.10.png'),
        desc: 'Máy làm sữa hạt',
      },
      {
        img: require('../assets/sub-menu-icon/3.11.png'),
        desc: 'lò vi sóng',
      },
      {
        img: require('../assets/sub-menu-icon/3.12.png'),
        desc: 'Quạt',
      },
      {
        img: require('../assets/sub-menu-icon/3.13.png'),
        desc: 'Quạt điều hòa',
      },
      {
        img: require('../assets/sub-menu-icon/3.14.png'),
        desc: 'Quạt sửi',
      },
      {
        img: require('../assets/sub-menu-icon/3.15.png'),
        desc: 'Cây nước nóng lạnh',
      },
      {
        img: require('../assets/sub-menu-icon/3.16.png'),
        desc: 'Lọc nước điện giải',
      },
      {
        img: require('../assets/sub-menu-icon/3.17.png'),
        desc: 'Cóc lọc dầu nguồn',
      },
      {
        img: require('../assets/sub-menu-icon/3.18.png'),
        desc: 'Lỗi máy lọc nước',
      },
      {
        img: require('../assets/sub-menu-icon/3.19.png'),
        desc: 'Máy lọc không khí',
      },
      {
        img: require('../assets/sub-menu-icon/3.20.png'),
        desc: 'Bếp ga',
      },
      {
        img: require('../assets/sub-menu-icon/3.21.png'),
        desc: 'Bàn ủi',
      },
      {
        img: require('../assets/sub-menu-icon/3.22.png'),
        desc: 'Máy hút mùi',
      },
      {
        img: require('../assets/sub-menu-icon/3.23.png'),
        desc: 'Lẩu điện',
      },
      {
        img: require('../assets/sub-menu-icon/3.24.png'),
        desc: 'Bình đun siêu tốc',
      },
      {
        img: require('../assets/sub-menu-icon/3.25.png'),
        desc: 'Lò nướng',
      },
      {
        img: require('../assets/sub-menu-icon/3.26.png'),
        desc: 'Bình thủy điện',
      },
      {
        img: require('../assets/sub-menu-icon/3.27.png'),
        desc: 'Máy sấy tóc',
      },
      {
        img: require('../assets/sub-menu-icon/3.28.png'),
        desc: 'Nồi áp xuất',
      },
      {
        img: require('../assets/sub-menu-icon/3.29.png'),
        desc: 'Máy vắt cam',
      },
      {
        img: require('../assets/sub-menu-icon/3.30.png'),
        desc: 'Máy pha cà phê',
      },
      {
        img: require('../assets/sub-menu-icon/3.31.png'),
        desc: 'Máy xay thịt',
      },
      {
        img: require('../assets/sub-menu-icon/3.32.png'),
        desc: 'Máy nhồi bột đánh trứng',
      },
      {
        img: require('../assets/sub-menu-icon/3.33.png'),
        desc: 'Máy hút ẩm',
      },
    ],
  },
  {
    title: 'Điện tử, viễn thông',
    subMenus: [
      {
        img: require('../assets/sub-menu-icon/4.1.png'),
        desc: 'Điện thoại',
      },
      {
        img: require('../assets/sub-menu-icon/4.2.png'),
        desc: 'LapTop',
      },
      {
        img: require('../assets/sub-menu-icon/4.3.png'),
        desc: 'Tablet',
      },
      {
        img: require('../assets/sub-menu-icon/4.4.png'),
        desc: 'Đồng hồ thông minh',
      },
      {
        img: require('../assets/sub-menu-icon/4.5.png'),
        desc: 'Máy tính để bàn',
      },
      {
        img: require('../assets/sub-menu-icon/4.6.png'),
        desc: 'Màn hình',
      },
      {
        img: require('../assets/sub-menu-icon/4.7.png'),
        desc: 'Máy in',
      },
      {
        img: require('../assets/sub-menu-icon/4.8.png'),
        desc: 'Mực in',
      },
    ],
  },
  {
    title: 'Đồ gia dụng',
    subMenus: [
      {
        img: require('../assets/sub-menu-icon/5.1.png'),
        desc: 'Bộ lau nhà ',
      },
      {
        img: require('../assets/sub-menu-icon/5.2.png'),
        desc: 'Nồi, bộ nồi',
      },
      {
        img: require('../assets/sub-menu-icon/5.3.png'),
        desc: 'Chảo các loại',
      },
      {
        img: require('../assets/sub-menu-icon/5.4.png'),
        desc: 'Bình, ly giữ nhiệt',
      },
      {
        img: require('../assets/sub-menu-icon/5.5.png'),
        desc: 'Bình đựng nước',
      },
      {
        img: require('../assets/sub-menu-icon/5.6.png'),
        desc: 'Hộp nhựa đựng đồ đa năng',
      },
      {
        img: require('../assets/sub-menu-icon/5.7.png'),
        desc: 'Hộp đựng thực phẩm',
      },
      {
        img: require('../assets/sub-menu-icon/5.8.png'),
        desc: 'Kéo',
      },
      {
        img: require('../assets/sub-menu-icon/5.9.png'),
        desc: 'Dao',
      },
      {
        img: require('../assets/sub-menu-icon/5.10.png'),
        desc: 'Thớt',
      },
      {
        img: require('../assets/sub-menu-icon/5.11.png'),
        desc: 'Dụng cụ mài dao',
      },
      {
        img: require('../assets/sub-menu-icon/5.12.png'),
        desc: 'Vợt muỗi',
      },
    ],
  },
  {
    title: 'Phụ kiện',
    subMenus: [
      {
        img: require('../assets/sub-menu-icon/6.1.png'),
        desc: 'Sạc dự phòng',
      },
      {
        img: require('../assets/sub-menu-icon/6.2.png'),
        desc: 'Tai nghe',
      },
      {
        img: require('../assets/sub-menu-icon/6.3.png'),
        desc: 'Loa',
      },
      {
        img: require('../assets/sub-menu-icon/6.4.png'),
        desc: 'Sạc cáp',
      },
      {
        img: require('../assets/sub-menu-icon/6.5.png'),
        desc: 'Ốp lưng điện thoại',
      },
      {
        img: require('../assets/sub-menu-icon/6.6.png'),
        desc: 'Ốp lưng máy tính bảng',
      },
      {
        img: require('../assets/sub-menu-icon/6.7.png'),
        desc: 'Miến dán',
      },
      {
        img: require('../assets/sub-menu-icon/6.8.png'),
        desc: 'Miến dán camera',
      },
      {
        img: require('../assets/sub-menu-icon/6.9.png'),
        desc: 'AirTag, vỏ bảo vệ AirTag',
      },
      {
        img: require('../assets/sub-menu-icon/6.10.png'),
        desc: 'Bàn phím bút Tablet',
      },
      {
        img: require('../assets/sub-menu-icon/6.11.png'),
        desc: 'Thẻ nhớ',
      },
      {
        img: require('../assets/sub-menu-icon/6.12.png'),
        desc: 'Giá đỡ điện thoại',
      },
      {
        img: require('../assets/sub-menu-icon/6.13.png'),
        desc: 'Chuột máy tính',
      },
      {
        img: require('../assets/sub-menu-icon/6.14.png'),
        desc: 'Bàn phím',
      },
      {
        img: require('../assets/sub-menu-icon/6.15.png'),
        desc: 'Balo, túi chóng sốc',
      },
      {
        img: require('../assets/sub-menu-icon/6.16.png'),
        desc: 'Thiết bị mạng',
      },
      {
        img: require('../assets/sub-menu-icon/6.17.png'),
        desc: 'Ổ cứng di động',
      },
      {
        img: require('../assets/sub-menu-icon/6.18.png'),
        desc: 'USB',
      },
      {
        img: require('../assets/sub-menu-icon/6.19.png'),
        desc: 'Giá đỡ Laptop',
      },
      {
        img: require('../assets/sub-menu-icon/6.20.png'),
        desc: 'Phần mềm',
      },
      {
        img: require('../assets/sub-menu-icon/6.21.png'),
        desc: 'Camera',
      },
      {
        img: require('../assets/sub-menu-icon/6.22.png'),
        desc: 'Máy chiếu',
      },
      {
        img: require('../assets/sub-menu-icon/6.23.png'),
        desc: 'Micro',
      },
      {
        img: require('../assets/sub-menu-icon/6.24.png'),
        desc: 'Cáp HDMI, cáp TV',
      },
      {
        img: require('../assets/sub-menu-icon/6.25.png'),
        desc: 'Khung treo tivi',
      },
      {
        img: require('../assets/sub-menu-icon/6.26.png'),
        desc: 'Điều khiển TV',
      },
      {
        img: require('../assets/sub-menu-icon/6.27.png'),
        desc: 'Giá đỡ máy giặt, máy lọc nước',
      },
    ],
  },
  {
    title: 'Máy cũ trưng bày',
    subMenus: [
      {
        img: require('../assets/sub-menu-icon/7.1.png'),
        desc: 'Tivi',
      },
      {
        img: require('../assets/sub-menu-icon/7.2.png'),
        desc: 'Máy lạnh',
      },
      {
        img: require('../assets/sub-menu-icon/7.3.png'),
        desc: 'Máy giặt',
      },
      {
        img: require('../assets/sub-menu-icon/7.4.png'),
        desc: 'Tủ lạnh',
      },
      {
        img: require('../assets/sub-menu-icon/7.5.png'),
        desc: 'Tủ đông',
      },
      {
        img: require('../assets/sub-menu-icon/7.6.png'),
        desc: 'Máy sấy',
      },
      {
        img: require('../assets/sub-menu-icon/7.7.png'),
        desc: 'Micro',
      },
      {
        img: require('../assets/sub-menu-icon/7.8.png'),
        desc: 'Loa karaoke',
      },
      {
        img: require('../assets/sub-menu-icon/7.9.png'),
        desc: 'Nồi cơm điện',
      },
      {
        img: require('../assets/sub-menu-icon/7.10.png'),
        desc: 'Bếp từ',
      },
      {
        img: require('../assets/sub-menu-icon/7.11.png'),
        desc: 'Bếp hồng ngoại',
      },
      {
        img: require('../assets/sub-menu-icon/7.12.png'),
        desc: 'Bếp gas',
      },
      {
        img: require('../assets/sub-menu-icon/7.13.png'),
        desc: 'Máy lọc nước',
      },
      {
        img: require('../assets/sub-menu-icon/7.14.png'),
        desc: 'Cây nước nóng lạnh',
      },
      {
        img: require('../assets/sub-menu-icon/7.15.png'),
        desc: 'Xe đạp',
      },
      {
        img: require('../assets/sub-menu-icon/7.16.png'),
        desc: 'Quạt',
      },
      {
        img: require('../assets/sub-menu-icon/7.17.png'),
        desc: 'Quạt điều hòa',
      },
      {
        img: require('../assets/sub-menu-icon/7.18.png'),
        desc: 'Máy xay sinh tố',
      },
      {
        img: require('../assets/sub-menu-icon/7.19.png'),
        desc: 'Máy ép trái cây',
      },
      {
        img: require('../assets/sub-menu-icon/7.20.png'),
        desc: 'Máy nước nóng',
      },
      {
        img: require('../assets/sub-menu-icon/7.21.png'),
        desc: 'Bàn ủi',
      },
      {
        img: require('../assets/sub-menu-icon/7.22.png'),
        desc: 'Điện thoại',
      },
      {
        img: require('../assets/sub-menu-icon/7.23.png'),
        desc: 'Máy tính bản',
      },
      {
        img: require('../assets/sub-menu-icon/7.24.png'),
        desc: 'Laptop',
      },
      {
        img: require('../assets/sub-menu-icon/7.25.png'),
        desc: 'Đồng hồ thời trang',
      },
      {
        img: require('../assets/sub-menu-icon/7.26.png'),
        desc: 'Đồng hồ thông minh',
      },
      {
        img: require('../assets/sub-menu-icon/7.27.png'),
        desc: 'Đồng hồ thanh lý',
      },
      {
        img: require('../assets/sub-menu-icon/7.28.png'),
        desc: 'Pin sạc sự phòng',
      },
      {
        img: require('../assets/sub-menu-icon/7.29.png'),
        desc: 'Chuột',
      },
      {
        img: require('../assets/sub-menu-icon/7.30.png'),
        desc: 'Cáp sạc Adapter sạc, chuyển đổi',
      },
      {
        img: require('../assets/sub-menu-icon/7.31.png'),
        desc: 'Tai nghe',
      },
      {
        img: require('../assets/sub-menu-icon/7.32.png'),
        desc: 'Phụ kiện điện máy',
      },
      {
        img: require('../assets/sub-menu-icon/7.33.png'),
        desc: 'Loa Laptop',
      },
      {
        img: require('../assets/sub-menu-icon/7.34.png'),
        desc: 'Loa',
      },
      {
        img: require('../assets/sub-menu-icon/7.35.png'),
        desc: 'Máy bơm nước',
      },
      {
        img: require('../assets/sub-menu-icon/7.36.png'),
        desc: 'dụng cụ gia đình',
      },
      {
        img: require('../assets/sub-menu-icon/7.37.png'),
        desc: 'Ổn áp',
      },
      {
        img: require('../assets/sub-menu-icon/7.38.png'),
        desc: 'Máy rửa xe',
      },
      {
        img: require('../assets/sub-menu-icon/7.39.png'),
        desc: 'Máy khoan',
      },
      {
        img: require('../assets/sub-menu-icon/7.40.png'),
        desc: 'Máy sấy tóc',
      },
    ],
  },
  {
    title: 'Sản phẩm khác',
    subMenus: [
      {
        img: require('../assets/sub-menu-icon/8.1.png'),
        desc: 'Đồng hồ thời trang',
      },
      {
        img: require('../assets/sub-menu-icon/8.2.png'),
        desc: 'Đèn điệnm, đèn sạc',
      },
      {
        img: require('../assets/sub-menu-icon/8.3.png'),
        desc: 'Băng keo điện',
      },
      {
        img: require('../assets/sub-menu-icon/8.4.png'),
        desc: 'Xe đạp',
      },
      {
        img: require('../assets/sub-menu-icon/8.6.png'),
        desc: 'Ổ cắm - Phích cắm',
      },
      {
        img: require('../assets/sub-menu-icon/8.7.png'),
        desc: 'camera',
      },
      {
        img: require('../assets/sub-menu-icon/8.8.png'),
        desc: 'Ổn áp',
      },
      {
        img: require('../assets/sub-menu-icon/8.9.png'),
        desc: 'Máy chiếu',
      },
      {
        img: require('../assets/sub-menu-icon/8.10.png'),
        desc: 'Máy phát điện',
      },
      {
        img: require('../assets/sub-menu-icon/8.11.png'),
        desc: 'Pin tiểu',
      },
      {
        img: require('../assets/sub-menu-icon/8.12.png'),
        desc: 'Máy rửa xe',
      },
      {
        img: require('../assets/sub-menu-icon/8.13.png'),
        desc: 'Bộ dụng cụ đa năng',
      },
      {
        img: require('../assets/sub-menu-icon/8.14.png'),
        desc: 'Máy mài',
      },
      {
        img: require('../assets/sub-menu-icon/8.15.png'),
        desc: 'Máy bơm nước',
      },
      {
        img: require('../assets/sub-menu-icon/8.16.png'),
        desc: 'Pin sạc',
      },
      {
        img: require('../assets/sub-menu-icon/8.17.png'),
        desc: 'Tua vít',
      },
      {
        img: require('../assets/sub-menu-icon/8.18.png'),
        desc: 'Mũi Khoa',
      },
      {
        img: require('../assets/sub-menu-icon/8.19.png'),
        desc: 'Xe đẩy, kéo hàng',
      },
      {
        img: require('../assets/sub-menu-icon/8.20.png'),
        desc: 'Máy cưa',
      },
      {
        img: require('../assets/sub-menu-icon/8.21.png'),
        desc: 'Máy chà nhám',
      },
      {
        img: require('../assets/sub-menu-icon/8.22.png'),
        desc: 'Bảo hộ lao động',
      },
      {
        img: require('../assets/sub-menu-icon/8.23.png'),
        desc: 'Máy bào',
      },
      {
        img: require('../assets/sub-menu-icon/8.24.png'),
        desc: 'Cọ quyét sơn',
      },
    ],
  },
  {
    title: 'thông tin',
    subMenus: [
      {
        img: require('../assets/sub-menu-icon/9.1.png'),
        desc: 'Tư vấn chọn mua',
      },
      {
        img: require('../assets/sub-menu-icon/9.2.png'),
        desc: 'Vào bếp',
      },
      {
        img: require('../assets/sub-menu-icon/9.3.png'),
        desc: 'Khuyến mãi',
      },
      {
        img: require('../assets/sub-menu-icon/9.4.png'),
        desc: 'Tìm địa chỉ cửa hàng',
      },
      {
        img: require('../assets/sub-menu-icon/9.6.png'),
        desc: 'Tìm hiểu về mua trả góp',
      },
      {
        img: require('../assets/sub-menu-icon/9.7.png'),
        desc: 'Tra cứu bảo hành',
      },
    ],
  },
  {
    title: 'Dịch vụ tiện ích',
    subMenus: [
      {
        img: require('../assets/sub-menu-icon/10.1.png'),
        desc: 'Vệ sinh máy lạnh',
      },
      {
        img: require('../assets/sub-menu-icon/10.2.png'),
        desc: 'Sim số thẻ cào',
      },
      {
        img: require('../assets/sub-menu-icon/10.3.png'),
        desc: 'Bảo hiển Ôtô - Xe máy',
      },
      {
        img: require('../assets/sub-menu-icon/10.4.png'),
        desc: 'Đóng tiền trả góp',
      },
      {
        img: require('../assets/sub-menu-icon/10.5.png'),
        desc: 'Đi chợ online',
      },
    ],
  },
];
