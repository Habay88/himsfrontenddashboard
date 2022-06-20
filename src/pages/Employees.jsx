import React, { useEffect, useState } from 'react';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page } from '@syncfusion/ej2-react-grids';

// import { employeesData, employeesGrid } from '../data/dummy';
import { effect } from '@syncfusion/ej2/progressbar';
import { employeesGrid } from '../data/tabledata';
import { Header } from '../components';
import EmployeeService from '../services/EmployeeService';

const Employees = () => {
  const toolbarOptions = ['Search'];

  const editing = { allowDeleting: true, allowEditing: true };
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    EmployeeService.getAllEmployees().then((response) => {
      setEmployees(response.data);
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees" />
      <button>Add new</button>
      <GridComponent

        // eslint-disable-next-line react/jsx-props-no-multi-spaces
        dataSource={EmployeeService}
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        editSettings={editing}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>

          {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Search, Page]} />

      </GridComponent>
    </div>
  );
};
export default Employees;
