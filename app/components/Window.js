import React from 'react'
import Dashboard from './Window/Dashboard';

const Window = ({ selectedView }) => {
  switch (selectedView) {
    // case 'Add New Student':
    //   return <AddStudent />;
    // case 'View Student Details':
    //   return <ViewStudentDetails />;
    // case 'Add New Teacher':
    //   return <AddTeacher />;
    // case 'Dashboard':
    //   return <DashboardHome />;
    default:
      return <Dashboard/>;
  }
};

export default Window;