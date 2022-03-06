import React from 'react';
import AddNews from './AddNews/AddNews';
import ManageNews from './ManageNews/ManageNews';

const NewsDashboard = () => {
    return (
        <div>
            <AddNews/>
            <ManageNews/>
        </div>
    );
};

export default NewsDashboard;