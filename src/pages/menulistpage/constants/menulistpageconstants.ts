import { IMAGE_CONSTANTS } from '@constants/ImageConstants';

export const MENULISTPAGE_CONSTANTS = {
  HEADER: {
    IMAGE: {
      LOGO: IMAGE_CONSTANTS.LOGO,
      LOGOPNG: IMAGE_CONSTANTS.LOGOPNG,
      CART: IMAGE_CONSTANTS.CART,
      RECEIPT: IMAGE_CONSTANTS.RECEIPT,
    },
  },
  ASSIGNMODAL: {
    IMAGES: {
      NOTICE: IMAGE_CONSTANTS.Notice,
    },
    TEXT: {
      WON: '원',
      AMOUNT: '수량',
      MINUS: '-',
      PLUS: '+',
      DAM: '장바구니 담기',
      Toast: (max: number) => `최대 수량은 ${max}개입니다.`,
    },
  },
  LISTPAGEHEADER: {
    TEXT: {
      TABLE: '테이블 : ',
      TABELFEE: '테이블 이용료',
      MENU: '메뉴',
      BEVERAGE: '음료',
    },
  },
  ASSIGNSIDEMODAL: {
    TEXT: {
      Title: '장바구니에 추가되었어요!',
      MoveToBowl: '장바구니로 이동',
      MoreMenu: '다른 메뉴 더보기',
    },
  },
  MENUITEMS: {
    IMAGES: {
      NONIMAGE: IMAGE_CONSTANTS.CHARACTER,
    },
  },
};
