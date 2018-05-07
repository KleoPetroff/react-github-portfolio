import React, { Fragment, Component } from 'react';

import './filters.css';

export default class Sorting extends Component {
  sortCategories = ['language', 'stargazers_count', 'created_at'];
  orderCategories = ['asc', 'desc'];

  constructor(props) {
    super(props);

    this.state = {
      sortIndex: 1,
      orderIndex: 1
    };
  }

  applySorting() {
    const sortName = this.sortCategories[this.state.sortIndex];
    const orderName = this.orderCategories[this.state.orderIndex];
    this.props.onSortChange(sortName, orderName);
  }

  changeSortType = (index) => {
    if (index === this.state.sortIndex) return;
    this.setState({ sortIndex: index }, this.applySorting);
  };

  changeOrderBy = (index) => {
    if (index === this.state.orderIndex) return;
    this.setState({ orderIndex: index }, this.applySorting);
  };

  render() {
    return (
      <Fragment>
        <div className="sort">
          <div className="sort-heading">Sort by</div>
          <div className="sort-group clearfix">
            <div
              onClick={() => this.changeSortType(0)}
              className={
                (this.state.sortIndex === 0 ? 'active ' : '') +
                'sort-item first'
              }
            >
              Type
            </div>
            <div
              onClick={() => this.changeSortType(1)}
              className={
                (this.state.sortIndex === 1 ? 'active ' : '') + 'sort-item'
              }
            >
              Stars
            </div>
            <div
              onClick={() => this.changeSortType(2)}
              className={
                (this.state.sortIndex === 2 ? 'active ' : '') + 'sort-item last'
              }
            >
              Date
            </div>
          </div>
        </div>
        <div className="order">
          <div className="order-heading">Order</div>
          <div className="order-group clearfix">
            <div
              onClick={() => this.changeOrderBy(0)}
              className={
                (this.state.orderIndex === 0 ? 'active ' : '') +
                'order-item first'
              }
            >
              ASC
            </div>
            <div
              onClick={() => this.changeOrderBy(1)}
              className={
                (this.state.orderIndex === 1 ? 'active ' : '') +
                'order-item last'
              }
            >
              DESC
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
