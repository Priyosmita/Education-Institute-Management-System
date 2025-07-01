import React from 'react'
import Dashboard from './Window/Dashboard';
import AddNewStudent from './Window/AddNewStudent';
import ViewStudentDetails from './Window/ViewStudentDetails';
import RecieveFees from './Window/RecieveFees';
import DiscountToStudents from './Window/DiscountToStudents';
import AddNewTeacher from './Window/AddNewTeacher';
import ViewTeacherDetails from './Window/ViewTeacherDetails';
import AddNewBatch from './Window/AddNewBatch';
import BatchDetails from './Window/BatchDetails';


const Window = ({ selectedView }) => {
  switch (selectedView) {

    case 'Add New Student':
      return <AddNewStudent />;
    case 'View Student Details':
      return <ViewStudentDetails />;

    case 'Add New Teacher':
      return <AddNewTeacher />;
    case 'View Teacher Details':
      return <ViewTeacherDetails />;

    case 'Recieve Fees':
      return <RecieveFees />;
    case 'Discounts to Students':
      return <DiscountToStudents />;
    
    case 'Add New Batch':
      return <AddNewBatch />;
    case 'Batch Details':
      return <BatchDetails />;

      default:
      return <Dashboard/>;
  }
};

export default Window;