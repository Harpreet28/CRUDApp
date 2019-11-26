import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
  constructor(props) {
      super(props);
      this.onChangeEmployeeName = this.onChangeEmployeeName.bind(this);
      this.onChangeCompanyName = this.onChangeCompanyName.bind(this);
      this.onChangeEmployeeId = this.onChangeEmployeeId.bind(this);
      this.createEmployee = this.createEmployee.bind(this);

      this.state = {
          employee_name: '',
          company_name: '',
          employee_id:''
      }
    }
      onChangeEmployeeName(e) {
        this.setState({
          employee_name: e.target.value
        });
      }
      onChangeCompanyName(e) {
        this.setState({
          company_name: e.target.value
        })
      }
      onChangeEmployeeId(e) {
        this.setState({
          employee_id: e.target.value
        })
      }

      createEmployee() {
      //  e.preventDefault();
        const obj = {
          employee_name: this.state.employee_name,
          company_name: this.state.company_name,
          employee_id: this.state.employee_id
        };
        axios.post('http://localhost:4000/business/add', obj)
        .then(res => console.log(res.data));
        console.log(`The values are ${this.state.employee_name}, ${this.state.company_name}, and ${this.state.employee_id}`);
        this.setState({
          employee_name: '',
          company_name: '',
          employee_id: ''
        })
      }
    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Add New Employee</h3>
                <form>
                    <div className="form-group">
                        <label>Add Employee Name:  </label>
                        <input type="text" className="form-control"
                        value={this.state.employee_name}
                        onChange={this.onChangeEmployeeName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Company Name: </label>
                        <input type="text" className="form-control"
                        value={this.state.company_name}
                        onChange={this.onChangeCompanyName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Employee Id: </label>
                        <input type="text" className="form-control"
                        value={this.state.employee_id}
                        onChange={this.onChangeEmployeeId}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" onClick={this.createEmployee} className="btn btn-primary" > Register Business</button>
                    </div>
                </form>
            </div>
        )
    }
}
