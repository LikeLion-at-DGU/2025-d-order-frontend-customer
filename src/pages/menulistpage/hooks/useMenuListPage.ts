import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { MenuListPageService } from '../_Dummy/MenuListPageService';
import { ROUTE_CONSTANTS } from '@constants/RouteConstants';

const SCROLL_OFFSET = 120;

const useMenuListPage = () => {
  const navigate = useNavigate();

  const [menuItems, setMenuItems] = useState<any[]>([]);

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

  const [count, setCount] = useState(1);
  const [showToast, setShowToast] = useState(false);

  const resetCount = () => setCount(1);
  const isMin = count <= 1;
  const isMax = selectedItem ? count > selectedItem.quantity : false;
  const isMax2 = selectedItem ? count >= selectedItem.quantity : false;

  useEffect(() => {
    const fetchData = async () => {
      const items = await MenuListPageService.fetchMenuItems();
      setMenuItems(items);
    };
    fetchData();
  }, []);

  const handleDecrease = () => {
    if (!isMin) setCount((prev) => prev - 1);
  };

  const handleIncrease = () => {
    if (isMax2) {
      setShowToast(true);
    }
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    if (showToast) {
      const timeout = setTimeout(() => setShowToast(false), 2000);
      return () => clearTimeout(timeout);
    }
  }, [showToast]);

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

      const scrollTop = window.scrollY;
      const scrollBottom = scrollTop + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;

      if (pageHeight - scrollBottom < 10) {
        setSelectedCategory('drink');
        return;
      }

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
    resetCount();
    setIsModalOpen(true);
  };

  const handleSubmitItem = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setSelectedItem(null);
      setIsClosing(false);
      setIsModalOpen2(true);
    }, 300);
  };

  const handleFirstModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const handleSecondModal = () => {
    setIsModalOpen2(false);
  };

  return {
    menuItems,
    sectionRefs,
    selectedCategory,
    handleScrollTo,
    handleOpenModal,
    selectedItem,
    isModalOpen,
    isModalOpen2,
    isClosing,
    handleSubmitItem,
    handleFirstModal,
    handleSecondModal,
    handleNavigate: () => navigate(ROUTE_CONSTANTS.RESERVATION),
    handleReceipt: () => navigate(ROUTE_CONSTANTS.RECEIPT),
    count,
    isMin,
    isMax,
    showToast,
    handleDecrease,
    handleIncrease,
  };
};

export default useMenuListPage;
