import * as S from './MenuListPage.styled';

import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import MenuListPageHeader from './components/MenuListPageHeader/MenuListPageHeader';
import MenuList from './components/MenuList/MenuList';
import MenuAssignModal from './components/modals/MenuAssignModal/MenuAssignModal';
import MenuAssignSidModal from './components/modals/menuAssignSideModal/MenuAssignSideModal';

const menuItems = [
  {
    id: 0,
    name: '테이블 이용료',
    description: '인원 수에 맞춰 주문해 주세요.',
    price: 8000,
    imageUrl: '/images/table.png',
    category: 'tableFee' as const,
    soldOut: false,
    quantity: 1,
  },
  {
    id: 1,
    name: '테이블 이용료2',
    description: '테이블 추가 이용료입니다.',
    price: 8000,
    imageUrl: '/images/table.png',
    category: 'tableFee' as const,
    soldOut: true,
    quantity: 1,
  },

  // 메뉴
  {
    id: 10,
    name: '마르게리타 피자',
    description: '토마토와 바질의 조화',
    price: 18000,
    imageUrl: '/images/pizza1.png',
    category: 'menu' as const,
    soldOut: false,
    quantity: 4,
  },
  {
    id: 11,
    name: '불고기 피자',
    description: '한국인의 입맛에 딱!',
    price: 21000,
    imageUrl: '/images/pizza2.png',
    category: 'menu' as const,
    soldOut: false,
    quantity: 6,
  },
  {
    id: 12,
    name: '페퍼로니 피자',
    description: '짭조름한 풍미',
    price: 20000,
    imageUrl: '/images/pizza1.png',
    category: 'menu' as const,
    soldOut: false,
    quantity: 1,
  },
  {
    id: 13,
    name: '치즈 피자',
    description: '치즈 덕후를 위한 선택',
    price: 19000,
    imageUrl: '/images/pizza2.png',
    category: 'menu' as const,
    soldOut: true,
    quantity: 1,
  },
  {
    id: 14,
    name: '감자 피자',
    description: '담백한 맛이 일품',
    price: 19500,
    imageUrl: '/images/pizza1.png',
    category: 'menu' as const,
    soldOut: false,
    quantity: 1,
  },

  // 음료
  {
    id: 20,
    name: '콜라 500ml',
    description: '시원한 탄산음료',
    price: 3000,
    imageUrl: '/images/coke.png',
    category: 'drink' as const,
    soldOut: false,
    quantity: 1,
  },
  {
    id: 21,
    name: '사이다 500ml',
    description: '청량한 맛!',
    price: 3000,
    imageUrl: '/images/sprite.png',
    category: 'drink' as const,
    soldOut: true,
    quantity: 1,
  },
  {
    id: 22,
    name: '제로 콜라',
    description: '당 걱정 없이 즐기세요',
    price: 3200,
    imageUrl: '/images/coke.png',
    category: 'drink' as const,
    soldOut: false,
    quantity: 1,
  },
  {
    id: 23,
    name: '오렌지 주스',
    description: '과즙 가득!',
    price: 3500,
    imageUrl: '/images/oj.png',
    category: 'drink' as const,
    soldOut: false,
    quantity: 15,
  },
  {
    id: 24,
    name: '생수',
    description: '기본 중의 기본',
    price: 1500,
    imageUrl: '/images/water.png',
    category: 'drink' as const,
    soldOut: false,
    quantity: 10,
  },
];

const SCROLL_OFFSET = 120;

const MenulistPage = () => {
  const navigate = useNavigate();
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
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

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

  const handleSubmitItem = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setSelectedItem(null);
      setIsClosing(false);
    }, 300);
    setIsModalOpen2(true);
  };

  const handleFirstModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const handleSecondModal = () => {
    setIsModalOpen2(false);
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
      {isModalOpen && selectedItem && (
        <MenuAssignModal
          item={selectedItem}
          onClose={handleFirstModal}
          onSubmit={handleSubmitItem}
          isClosing={isClosing}
        />
      )}
      {isModalOpen2 && (
        <MenuAssignSidModal
          onClose={handleSecondModal}
          onNavigate={() => navigate('/')}
        />
      )}
    </S.Wrapper>
  );
};

export default MenulistPage;
