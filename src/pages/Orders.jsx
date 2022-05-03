import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchOrder } from '../redux/actions/orders';

import CardOrder from '../components/Card/CardOrder';

const Orders = () => {
    const dispatch = useDispatch();
    const orderItems = useSelector(({ orders }) => orders.items);

    React.useEffect(() => {
        dispatch(fetchOrder(orderItems));
    }, []);

    return (
        <div className="content">
            <div className="content__header">
                <h1>Orders</h1>
            </div>
            <div className="sneakers">
                {orderItems.map((obj) =>
                    obj?.items?.map((item, index) => <CardOrder key={item.id + index} {...item} />),
                )}
            </div>
        </div>
    );
};

export default Orders;
