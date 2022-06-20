/* eslint-disable class-methods-use-this */
import axios from 'axios';

const EMPLOYEE_BASE_URL = 'http://localhost:3333/api/doctor/';

class EmployeeService {
  getAllEmployees() {
    return axios.get(EMPLOYEE_BASE_URL);
  }
}
export default new EmployeeService();
