import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangeEmployeeName = this.onChangeEmployeeName.bind(this);
    this.onChangeCompanyName = this.onChangeCompanyName.bind(this);
    this.onChangeEmployeeId = this.onChangeEmployeeId.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      employee_name: '',
      company_name: '',
      employee_id:''
    }
  }

  componentDidMount() {
      axios.get('http://localhost:4000/business/edit/'+this.props.match.params.id)
          .then(response => {
              this.setState({
                employee_name: response.data.employee_name,
                company_name: response.data.company_name,
                employee_id: response.data.employee_id });
          })
          .catch(function (error) {
              console.log(error);
          })
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

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      employee_name: this.state.employee_name,
      company_name: this.state.company_name,
      employee_id: this.state.employee_id
    };
    axios.post('http://localhost:4000/business/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));

    this.props.history.push('/index');
  }

  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Update Employee</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Person Name:  </label>
                    <input
                      type="text"
                      className="form-control"
                      value={this.state.employee_name}
                      onChange={this.onChangeEmployeeName}
                      />
                </div>
                <div className="form-group">
                    <label>Company Name: </label>
                    <input type="text"
                      className="form-control"
                      value={this.state.company_name}
                      onChange={this.onChangeCompanyName}
                      />
                </div>
                <div className="form-group">
                    <label>Employee Id: </label>
                    <input type="text"
                      className="form-control"
                      value={this.state.employee_id}
                      onChange={this.onChangeEmployeeId}
                      />
                </div>
                <div className="form-group">
                    <input type="submit"
                      value="Update Business"
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}
