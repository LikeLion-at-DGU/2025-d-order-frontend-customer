import * as S from './MenuListPage.styled';

import { useState, useRef, useEffect } from 'react';

import MenuListPageHeader from './components/MenuListPageHeader/MenuListPageHeader';
import MenuList from './components/MenuList/MenuList';

const menuItems = [
  {
    id: 0,
    name: '테이블 이용료',
    description: '인원 수에 맞춰 주문해 주세요.',
    price: 8000,
    imageUrl: '/images/table.png',
    category: 'tableFee' as const,
    soldOut: false,
  },
  {
    id: 1,
    name: '테이블 이용료2',
    description: '인원 수에 맞춰 주문해 주세요.',
    price: 8000,
    imageUrl: '/images/table.png',
    category: 'tableFee' as const,
    soldOut: true,
  },
  {
    id: 2,
    name: '피자',
    description: '진짜 맛있어요',
    price: 20000,
    imageUrl: '/images/pizza2.png',
    category: 'menu' as const,
    soldOut: true,
  },
  {
    id: 3,
    name: '피자',
    description: '어쩌구 저쩌구 맛난 피자에용',
    price: 20000,
    imageUrl: '/images/pizza1.png',
    category: 'menu' as const,
    soldOut: false,
  },
  {
    id: 4,
    name: '피자',
    description: '진짜 맛있어요',
    price: 20000,
    imageUrl: '/images/pizza2.png',
    category: 'menu' as const,
    soldOut: false,
  },
  {
    id: 5,
    name: '피자',
    description: '어쩌구 저쩌구 맛난 피자에용',
    price: 20000,
    imageUrl: '/images/pizza1.png',
    category: 'menu' as const,
    soldOut: false,
  },
  {
    id: 6,
    name: '피자',
    description: '진짜 맛있어요',
    price: 20000,
    imageUrl: '/images/pizza2.png',
    category: 'menu' as const,
    soldOut: true,
  },
  {
    id: 7,
    name: '피자',
    description: '어쩌구 저쩌구 맛난 피자에용',
    price: 20000,
    imageUrl: '/images/pizza1.png',
    category: 'menu' as const,
    soldOut: false,
  },
  {
    id: 8,
    name: '피자',
    description: '진짜 맛있어요',
    price: 20000,
    imageUrl: '/images/pizza2.png',
    category: 'menu' as const,
    soldOut: false,
  },
  {
    id: 101,
    name: '콜라',
    description: '시원한 탄산음료',
    price: 3000,
    imageUrl: '/images/coke.png',
    category: 'drink' as const,
    soldOut: false,
  },
  {
    id: 102,
    name: '사이다',
    description: '깔끔한 청량감',
    price: 3000,
    imageUrl: '/images/sprite.png',
    category: 'drink' as const,
    soldOut: true,
  },
  {
    id: 103,
    name: '콜라',
    description: '시원한 탄산음료',
    price: 3000,
    imageUrl: '/images/coke.png',
    category: 'drink' as const,
    soldOut: false,
  },
  {
    id: 104,
    name: '사이다',
    description: '깔끔한 청량감',
    price: 3000,
    imageUrl: '/images/sprite.png',
    category: 'drink' as const,
    soldOut: false,
  },
  {
    id: 105,
    name: '콜라',
    description: '시원한 탄산음료',
    price: 3000,
    imageUrl: '/images/coke.png',
    category: 'drink' as const,
    soldOut: false,
  },
  {
    id: 106,
    name: '사이다',
    description: '깔끔한 청량감',
    price: 3000,
    imageUrl: '/images/sprite.png',
    category: 'drink' as const,
    soldOut: false,
  },
  {
    id: 107,
    name: '콜라',
    description: '시원한 탄산음료',
    price: 3000,
    imageUrl: '/images/coke.png',
    category: 'drink' as const,
    soldOut: true,
  },
  {
    id: 108,
    name: '사이다',
    description: '깔끔한 청량감',
    price: 3000,
    imageUrl: '/images/sprite.png',
    category: 'drink' as const,
    soldOut: false,
  },
];

const SCROLL_OFFSET = 120;

const MenulistPage = () => {
  const tableFeeRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const drinkRef = useRef<HTMLDivElement>(null);

  const sectionRefs = {
    tableFee: tableFeeRef,
    menu: menuRef,
    drink: drinkRef,
  };

  const [selectedCategory, setSelectedCategory] = useState<
    'tableFee' | 'menu' | 'drink'
  >('tableFee');
  const [selectedItem, setSelectedItem] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleScrollTo = (category: 'tableFee' | 'menu' | 'drink') => {
    setSelectedCategory(category);
    const target = sectionRefs[category].current;
    if (target) {
      const top = target.offsetTop - SCROLL_OFFSET;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      let activeCategory: 'tableFee' | 'menu' | 'drink' | null = null;
      let maxTop = -Infinity;

      Object.entries(sectionRefs).forEach(([key, ref]) => {
        if (ref.current) {
          const rectTop = ref.current.getBoundingClientRect().top;
          if (rectTop <= SCROLL_OFFSET && rectTop > maxTop) {
            maxTop = rectTop;
            activeCategory = key as 'tableFee' | 'menu' | 'drink';
          }
        }
      });

      if (activeCategory && activeCategory !== selectedCategory) {
        setSelectedCategory(activeCategory);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedCategory]);

  const handleOpenModal = (item: any) => {
    if (item.category === 'tableFee' && item.soldOut) return;
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <S.Wrapper>
      <MenuListPageHeader
        title={'멋쟁이사자처럼'}
        tableNumber={1}
        onSelectCategory={handleScrollTo}
        selectedCategory={selectedCategory}
      />
      <S.Container>
        <MenuList
          items={menuItems}
          sectionRefs={sectionRefs}
          selectedCategory={selectedCategory}
          onOpenModal={handleOpenModal}
        />
      </S.Container>
      {isModalOpen && (
        <div className="modal">
          <p>{selectedItem?.name}</p>
          <button onClick={handleCloseModal}>닫기</button>
        </div>
      )}
    </S.Wrapper>
  );
};

export default MenulistPage;
