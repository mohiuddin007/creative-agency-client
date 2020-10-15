import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import AllServicesListInfo from '../AllServicesListInfo/AllServicesListInfo';
import Sidebar from '../Sidebar/Sidebar';

const AllServicesList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/allCustomerOrders')
        .then(res => res.json())
        .then(data => {
            setAllOrders(data);
        })
    }, [])

    return (
        <div className="row">
        <div className="col-md-3">
           <Sidebar/>
        </div>
        <div className="col-md-9">
        <div className="pageHeading">
                <div className="row justify-content-between">
                    <div className="col-md-4"> <h1 className="pt-5">All Services List</h1> </div>
                    <div className="col-md-4"><h5 className="pt-5">{loggedInUser.name}</h5></div>
                </div>
            </div>
            <div className="mainBody">
                <div className="row p-5 justify-content-center">
                    <div className="col-md-12 bg-light mt-2 p-4">
                          <table>
                              <tr>
                                  <th>Name</th>
                                  <th>Email</th>
                                  <th>Service</th>
                                  <th>Project Details</th>
                                  <th>Status</th>
                              </tr>
                              {
                                  allOrders.map(data => <AllServicesListInfo data={data} key={data._id}/>)
                              }
                          </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default AllServicesList;