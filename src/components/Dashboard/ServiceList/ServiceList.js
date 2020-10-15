import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import ServiceListInfo from '../ServiceListInfo/ServiceListInfo';
import Sidebar from '../Sidebar/Sidebar';
import loadingGif from '../../../images/loding gif/hzk6C.gif';

const ServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [userOrder, setUserOrder] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:8000/specificUserOrder?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data =>{
            setUserOrder(data);
        })
    },[])
    return (
        <div className="row">
        <div className="col-md-3">
           <Sidebar/>
        </div>
        <div className="col-md-9">
        <div className="pageHeading">
                <div className="row justify-content-between">
                    <div className="col-md-4"> <h1 className="pt-5">Service List</h1> </div>
                    <div className="col-md-4"><h5 className="pt-5">{loggedInUser.name}</h5></div>
                </div>
                
            </div>
            <div className="mainBody">
                <div className="row p-5">
                    {
                        userOrder.length === 0 && <img src={loadingGif} alt="loadingGif"/>
                    }
                     {
                         userOrder.map(order => <ServiceListInfo order={order} key={order._id}/>)
                     }
                </div>
            </div>
        </div>
    </div>
    );
};

export default ServiceList;