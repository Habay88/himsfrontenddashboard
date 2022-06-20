import React from 'react';
import { GrLocation } from 'react-icons/gr';

const gridEmployeeProfile = (props) => (
  <div className="flex items-center gap-2">
    <img
      className="rounded-full w-10 h-10"
      src={props.EmployeeImage}
      alt="employee"
    />
    <p>{props.Name}</p>
  </div>
);
const gridEmployeeCountry = (props) => (
  <div className="flex items-center justify-center gap-2">
    <GrLocation />
    <span>{props.Country}</span>
  </div>
);
export const employeesGrid = [
  { field: 'id',
    headerText: 'Employee ID',
    width: '150',
    textAlign: 'Center' },
  { headerText: 'FirstName',
    width: '150',
    template: gridEmployeeProfile,
    textAlign: 'Center' },
  { field: 'Name',
    headerText: '',
    width: '0',
    textAlign: 'Center',
  },
  { field: 'Title',
    headerText: 'LastName',
    width: '170',
    textAlign: 'Center',
  },
  { headerText: 'Email',
    width: '120',
    textAlign: 'Center',
    template: gridEmployeeCountry },

  { field: 'professionalStatement',
    headerText: 'Professional Statement',
    width: '170',
    format: 'yMd',
    textAlign: 'Center' },

  { field: 'practicing_from',
    headerText: 'Practicing From ',
    width: '120',
    textAlign: 'Center' },
  
];
