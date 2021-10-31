import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'react-bootstrap';

const PaginatorWidget = ({ totalPages, current, onPageChanged }) => {
  const updateActivePage = (currentPage) => {
    if (onPageChanged) onPageChanged(currentPage);
  };

  const showFirstButton = () => {
    if (current > 2) {
      return true;
    }
    return false;
  };

  const showPrevButton = () => {
    if (current > 1) {
      return true;
    }
    return false;
  };

  const showNextButton = () => {
    if (current < totalPages) {
      return true;
    }
    return false;
  };

  const showLastButton = () => {
    if (current < totalPages - 1) {
      return true;
    }
    return false;
  };

  const firtPage = (e) => {
    if (showFirstButton()) {
      e.preventDefault();
      updateActivePage(1);
    }
  };

  const previousPage = (e) => {
    if (showPrevButton()) {
      e.preventDefault();
      updateActivePage(current - 1);
    }
  };

  const nextPage = (e) => {
    if (showNextButton()) {
      e.preventDefault();
      updateActivePage(current + 1);
    }
  };

  const lastPage = (e) => {
    if (showLastButton()) {
      e.preventDefault();
      updateActivePage(totalPages);
    }
  };

  const itemsToDisplay = (currentPage) => {
    const items = [];
    // console.log(currentPage);

    if (currentPage - 2 >= 1) {
      items.push({
        text: String(currentPage - 2),
        pageNumber: currentPage - 2,
      });
    }

    if (currentPage - 1 >= 1) {
      items.push({
        text: String(currentPage - 1),
        pageNumber: currentPage - 1,
      });
    }

    items.push({
      text: String(currentPage),
      pageNumber: currentPage,
      active: true,
    });

    if (currentPage + 1 <= totalPages) {
      items.push({
        text: String(currentPage + 1),
        pageNumber: currentPage + 1,
      });
    }

    if (currentPage + 2 <= totalPages) {
      items.push({
        text: String(currentPage + 2),
        pageNumber: currentPage + 2,
      });
    }

    // // eslint-disable-next-line no-plusplus
    // for (let i = 0; i < totalPages && i < 5; i++) {
    // 	const item = {};
    // 	if (i === currentPage - 1) {
    // 		item.active = true;
    // 	}

    // 	items.push(item);
    // }

    return items;
  };

  const renderItem = (icon, text, onClick, isShowing, isActive) => (
    <Pagination.Item
      className="px-2"
      color="white"
      variant="info"
      onClick={onClick}
      disabled={!isShowing() && true}
      key={text}
      active={isActive}
    >
      {text}
    </Pagination.Item>
  );
  return (
    <>
      <br />
      <Pagination aria-label="Page navigation">
        {renderItem('angle-double-left', 'First', firtPage, showFirstButton)}
        {renderItem('angle-left', 'Prev', previousPage, showPrevButton)}
        {itemsToDisplay(current).map((item) => {
          return renderItem(
            '',
            item.text,
            (e) => {
              e.preventDefault();
              updateActivePage(item.pageNumber);
            },
            () => true /* index + 1 !== current */,
            item.active
          );
        })}
        {renderItem('angle-right', 'Next', nextPage, showNextButton)}
        {renderItem('angle-double-right', 'Last', lastPage, showLastButton)}
      </Pagination>
    </>
  );
};

PaginatorWidget.propTypes = {
  totalPages: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
  onPageChanged: PropTypes.func.isRequired,
};

export default PaginatorWidget;
