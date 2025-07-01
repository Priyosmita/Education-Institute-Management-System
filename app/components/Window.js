import React from 'react'
import Dashboard from './Window/Dashboard';
import AddNewStudent from './Window/AddNewStudent';

const Window = ({ selectedView }) => {
  switch (selectedView) {

    case 'Add New Student':
      return <AddNewStudent />;
    // case 'View Student Details':
    //   return <ViewStudentDetails />;
    // case 'Add New Teacher':
    //   return <AddTeacher />;
    default:
      return <Dashboard/>;
  }
};

export default Window;