import React from 'react';
import './style.css';
import { useState } from 'react';
import data from './data.json';

export default function App() {
  let [emp, setEmp] = useState({
    Id: 0,
    Name: '',
    Gender: '',
    Email: '',
    PhoneNumber: '',
    Skills: [],
    JoiningDate: '',
    Department: '',
  });

  // handlesubmit method call after form submitted
  function handleSubmit(e) {
    e.preventDefault();
    data.push(emp);
    setEmp({});
    e.target.reset();
  }

  function edit(obj) {
    console.log('edit', obj);
    let {
      Id,
      Name,
      Gender,
      Email,
      PhoneNumber,
      Skills,
      JoiningDate,
      Department,
    } = obj;
    setEmp({
      ...emp,
      Id: Id,
      Name: Name,
      Gender: Gender,
      Email: Email,
      PhoneNumber: PhoneNumber,
      Skills: Skills,
      JoiningDate: JoiningDate,
      Department: Department,
    });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setEmp({ ...emp, [name]: value });
  }

  function handleSkill(e) {
    let oldSkills = emp.Skills;
    if (e.target.checked) {
      oldSkills.push(e.target.value);
    } else {
      let index = oldSkills.indexOf(e.target.value);
      if (index > -1) {
        oldSkills.splice(index, 1);
      }
    }
    setEmp({ ...emp, Skills: oldSkills });
  }
  // let d = [];
  function upadte(obj) {
    console.log(obj);

    const d = data.map((value) => {
      if (value.Id == parseInt(obj.Id)) {
        return obj;
      } else {
        return value;
      }
    });

    console.log('obj', d);
    data.splice(0, data.length, ...d);
    setEmp([...data]);
  }

  // function deleteEmp(obj) {
  //   // let employee = obj;
  //   console.log(obj);
  //   let d = data.map((val, index) => {
  //     if (index === obj.Id) {
  //       return obj;
  //     } else return val;
  //   });
  //   console.log(d);
  //   let index = data.findIndex((x) => x.Id === d.Id);
  //   data.splice(index, 1);
  // }
  function deleteEmp(obj) {
    console.log(obj);
    let d = [];
    d = data.map((val) => {
      return val.Id == obj.Id ? `obj ${obj}` : `all data ${val}`;
    });
    let index = data.findIndex((x) => x.Id === obj.Id);
    console.log(index);

    data.splice(index, 1);
    console.log('After delete' + data);
    setEmp([...data]);
  }
  return (
    <div>
      <div>
        <div>
          <form onSubmit={handleSubmit.bind(this)}>
            <div>
              <label htmlFor="Id">ID:</label>
            </div>
            <div>
              <input
                type="number"
                name="Id"
                value={emp.Id}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="Name">Name:</label>
            </div>
            <div>
              <input
                type="text"
                name="Name"
                value={emp.Name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="Gender">Gender:</label>
            </div>
            <div>
              <input
                type="radio"
                name="Gender"
                value="Male"
                onChange={handleChange}
              />
              Male{' '}
            </div>
            <div>
              <input
                type="radio"
                name="Gender"
                value="Female"
                onChange={handleChange}
              />
              Female{' '}
            </div>
            <div>
              <input
                type="radio"
                name="Gender"
                value="Other"
                onChange={handleChange}
              />
              Other{' '}
            </div>
            <div>
              <label htmlFor="Email">Email:</label>
            </div>
            <div>
              <input
                type="email"
                name="Email"
                value={emp.Email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="Phonenumber">PhoneNumber:</label>
            </div>
            <div>
              <input
                type="number"
                name="PhoneNumber"
                id=""
                value={emp.PhoneNumber}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="Skills">Skills</label>
            </div>
            <input
              type="checkbox"
              name="Skills"
              value="Angular"
              onChange={handleSkill}
            />
            <label htmlFor="">Angular</label>
            <input
              type="checkbox"
              name="Skills"
              value="Vue"
              onChange={handleSkill}
            />
            <label htmlFor="">Vue</label>

            <input
              type="checkbox"
              name="Skills"
              value="React"
              onChange={handleSkill}
            />
            <label htmlFor="">React</label>

            <div>
              <label htmlFor="date">Joining Date:</label>
            </div>
            <div>
              <input
                type="date"
                name="JoiningDate"
                value={emp.JoiningDate}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="department">Department</label>
            </div>
            <div>
              <select
                name="Department"
                value={emp.Department}
                id="Department"
                onChange={handleChange}
              >
                <option value="Dotnet">Dotnet</option>
                <option value="Node/React">Node/React</option>
                <option value="PHP">PHP</option>
                <option value="Mobile">Mobile</option>
                <option value="Sales">Sales</option>
              </select>
            </div>
            <div>
              <input type="submit" value="submit" />
            </div>
          </form>
          <button onClick={upadte.bind(this, emp)}>Update</button>
        </div>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>PhoneNumber</th>
                <th>Skills</th>
                <th>Department</th>
                <th>Joining Date</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d) => {
                return (
                  <tr key={d.Id}>
                    <td>{d.Id}</td>
                    <td>{d.Name}</td>
                    <td>{d.Email}</td>
                    <td>{d.Gender}</td>
                    <td>{d.PhoneNumber}</td>
                    <td>{d.Skills.join(', ')}</td>
                    <td>{d.Department}</td>
                    <td>{d.JoiningDate}</td>
                    <td>
                      <button onClick={edit.bind(this, d)}>Edit</button>
                    </td>
                    <td>
                      <button onClick={deleteEmp.bind(this, d)}>Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div id="demo"></div>
        </div>
      </div>
    </div>
  );
}
