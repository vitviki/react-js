import React from "react";
import femaleProfile from "../images/femaleProfile.jpg";
import maleProfile from "../images/maleProfile.jpg";

const Employees = ({
  employees,
  team,
  handleEmployeeCardClick,
  handleTeamSelectionChange,
  teamMemberCount,
}) => {
  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8">
          <h3>
            {team} has {teamMemberCount} Members
          </h3>
        </div>
      </div>
      <div className="row justify-content-center mt-4 mb-3">
        <div className="col-6">
          <select
            className="form-select form-select-lg"
            value={team}
            onChange={handleTeamSelectionChange}
          >
            <option>TeamA</option>
            <option>TeamB</option>
            <option>TeamC</option>
            <option>TeamD</option>
          </select>
        </div>
      </div>
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className="card-collection">
            {employees.map((employee) => (
              <div
                key={employee.id}
                id={employee.id}
                className={
                  employee.teamName === team ? "card m-2 standout" : "card m-2"
                }
                style={{ cursor: "pointer" }}
                onClick={handleEmployeeCardClick}
              >
                {employee.gender === "male" ? (
                  <img src={maleProfile} className="card-img-top" />
                ) : (
                  <img src={femaleProfile} className="card-img-top" />
                )}
                <div className="card-body">
                  <h5 className="card-title">Full Name: {employee.fullName}</h5>
                  <p className="card-text">
                    <b>Designation: </b>
                    {employee.designation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Employees;
