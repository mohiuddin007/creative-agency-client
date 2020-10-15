import React from 'react';

const AllServicesListInfo = ({data}) => {
    return (
            <tr>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.title}</td>
                <td>{data.details}</td>
                <td className="text-success">Done</td>
            </tr>
    );
};

export default AllServicesListInfo;