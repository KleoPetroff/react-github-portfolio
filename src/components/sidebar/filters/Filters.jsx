import React, { Fragment, useState, useEffect } from 'react';
import './filters.css';
import { useIsInitial } from '../../../hooks/useIsInitial';

const SORT_CATEGORIES = ['language', 'stargazers_count', 'created_at'];
const ORDER_CATEGORIES = ['asc', 'desc'];

const Sorting = ({ onSortChange }) => {
  const [sortIndex, setSortIndex] = useState(1);
  const [orderIndex, setOrderIndex] = useState(1);

  const isInitial = useIsInitial();

  useEffect(() => {
    if (!isInitial) {
      applySorting();
    }
  }, [sortIndex, orderIndex]);

  const applySorting = () => {
    const sortName = SORT_CATEGORIES[sortIndex];
    const orderName = ORDER_CATEGORIES[orderIndex];

    onSortChange(sortName, orderName);
  };

  const changeSortType = (index) => {
    if (index === sortIndex) return;
    setSortIndex(index);
  };

  const changeOrderBy = (index) => {
    if (index === orderIndex) return;
    setOrderIndex(index);
  };

  return (
    <Fragment>
      <div className="sort">
        <div className="sort-heading">Sort by</div>
        <div className="sort-group clearfix">
          <div
            onClick={() => changeSortType(0)}
            className={(sortIndex === 0 ? 'active ' : '') + 'sort-item first'}
          >
            Type
          </div>
          <div
            onClick={() => changeSortType(1)}
            className={(sortIndex === 1 ? 'active ' : '') + 'sort-item'}
          >
            Stars
          </div>
          <div
            onClick={() => changeSortType(2)}
            className={(sortIndex === 2 ? 'active ' : '') + 'sort-item last'}
          >
            Date
          </div>
        </div>
      </div>
      <div className="order">
        <div className="order-heading">Order</div>
        <div className="order-group clearfix">
          <div
            onClick={() => changeOrderBy(0)}
            className={(orderIndex === 0 ? 'active ' : '') + 'order-item first'}
          >
            ASC
          </div>
          <div
            onClick={() => changeOrderBy(1)}
            className={(orderIndex === 1 ? 'active ' : '') + 'order-item last'}
          >
            DESC
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Sorting;
