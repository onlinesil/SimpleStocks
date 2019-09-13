import React from 'react';
import StockInfoContainer from './stock_info_container';
import ChartContainer from './chart_container';
import UserNavContainer from '../nav/user_nav_container';

class StockShow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <UserNavContainer />
                <div className="stock-show-wrapper">
                    <main className="stock-show-left-content">
                        <ChartContainer />
                        <StockInfoContainer />
                    </main>
                    <div className="order-sidebar">
                        handle transactions here
                    </div>
                </div>
            </div>
        )
    }
}
export default StockShow;