import React from 'react';
import Order from '../Order/Order';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div className="row">
            <div className="col-md-3">
               <Sidebar/>
            </div>
            <div className="col-md-9">
                <Order/>
            </div>
        </div>
    );
};

export default Dashboard;