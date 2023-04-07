import React from "react";

const ServiceTable = () => {
  return (
    <section id="required" class="documents-area">
        <div className="container">

      <div className="row">
        <div className="col-xl-12">
          <div className="job-list-table-box">
            <div className="table-outer">
              <table className="job-list-table">
                <thead className="header">
                  <tr>
                    <th>Department</th>
                    <th>Job Role</th>
                    <th>Location</th>
                    <th>Last Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="department">
                      <h3>Marketing</h3>
                    </td>
                    <td className="job-role">
                      <h3>Regional Head</h3>
                    </td>
                    <td className="location">
                      <p>Los Angeles</p>
                    </td>
                    <td className="last-date">
                      <p>18th Jul, 2022</p>
                    </td>
                    <td>
                      <div className="btn-box">
                        <a className="btn-one" href="#">
                          <span className="txt">Apply</span>
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="department">
                      <h3>Marketing</h3>
                    </td>
                    <td className="job-role">
                      <h3>Team Leader</h3>
                    </td>
                    <td className="location">
                      <p>Los Angeles</p>
                    </td>
                    <td className="last-date">
                      <p>25th Jul, 2022</p>
                    </td>
                    <td>
                      <div className="btn-box">
                        <a className="btn-one" href="#">
                          <span className="txt">Apply</span>
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="department">
                      <h3>Finance</h3>
                    </td>
                    <td className="job-role">
                      <h3>Assistant Manager</h3>
                    </td>
                    <td className="location">
                      <p>California</p>
                    </td>
                    <td className="last-date">
                      <p>10th Aug, 2022</p>
                    </td>
                    <td>
                      <div className="btn-box">
                        <a className="btn-one" href="#">
                          <span className="txt">Apply</span>
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="department">
                      <h3>Office</h3>
                    </td>
                    <td className="job-role">
                      <h3>Office Executive</h3>
                    </td>
                    <td className="location">
                      <p>Newyork</p>
                    </td>
                    <td className="last-date">
                      <p>10th Aug, 2022</p>
                    </td>
                    <td>
                      <div className="btn-box">
                        <a className="btn-one" href="#">
                          <span className="txt">Apply</span>
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="department">
                      <h3>Customer Care</h3>
                    </td>
                    <td className="job-role">
                      <h3>Help Desk Job</h3>
                    </td>
                    <td className="location">
                      <p>San Fransisco</p>
                    </td>
                    <td className="last-date">
                      <p>23rd Sep, 2022</p>
                    </td>
                    <td>
                      <div className="btn-box">
                        <a className="btn-one" href="#">
                          <span className="txt">Apply</span>
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      </div>

    </section>
  );
};

export default ServiceTable;
