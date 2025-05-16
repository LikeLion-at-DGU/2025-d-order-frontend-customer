import * as S from './MenuListPage.styled';

import useMenuListPage from './hooks/useMenuListPage';

import MenuListPageHeader from './components/MenuListPageHeader/MenuListPageHeader';
import MenuList from './components/MenuList/MenuList';
import MenuAssignModal from './components/modals/MenuAssignModal/MenuAssignModal';
import MenuAssignSidModal from './components/modals/menuAssignSideModal/MenuAssignSideModal';
import MenuListHeader from './components/Header/MenuListHeader';

const MenulistPage = () => {
  const {
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
    handleNavigate,
    handleReceipt,
    count,
    isMin,
    isMax,
    showToast,
    handleIncrease,
    handleDecrease,
  } = useMenuListPage();
  return (
    <S.Wrapper>
      <MenuListHeader onNavigate={handleNavigate} onReceipt={handleReceipt} />
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
          count={count}
          isMin={isMin}
          isMax={isMax}
          showToast={showToast}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
        />
      )}
      {isModalOpen2 && (
        <MenuAssignSidModal
          onClose={handleSecondModal}
          onNavigate={handleNavigate}
        />
      )}
    </S.Wrapper>
  );
};

export default MenulistPage;
