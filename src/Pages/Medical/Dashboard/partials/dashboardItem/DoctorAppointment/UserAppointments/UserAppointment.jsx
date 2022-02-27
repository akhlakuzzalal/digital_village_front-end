import React from 'react';

const UserAppointment = () => {
  return (
    <div>
      <h5>Your appointments</h5>
      <table class="table-fixed">
        <thead>
          <tr>
            <th>specialties</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Family Physicians</td>
            <td>11am to 5pm</td>
            <td>
              <button>Pay</button>
            </td>
          </tr>
          <tr>
            <td>Family Physicians</td>
            <td>11am to 5pm</td>
            <td>
              <button>Pay</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserAppointment;
