import React, { useState } from "react";

const GroupedTeamMembers = ({ employees, team, setTeam }) => {
  const [groupedEmployees, setgroupedEmployees] = useState(groupTeamMembers());

  function groupTeamMembers() {
    let teams = [];

    // Team A
    const teamAMembers = employees.filter(
      (employee) => employee.teamName === "TeamA"
    );
    const teamA = {
      team: "TeamA",
      members: teamAMembers,
      collapsed: team === "TeamA" ? false : true,
    };

    // Team B
    const teamBMembers = employees.filter(
      (employee) => employee.teamName === "TeamB"
    );

    const teamB = {
      team: "TeamB",
      members: teamBMembers,
      collapsed: team === "TeamB" ? false : true,
    };

    // Team C
    const teamCMembers = employees.filter(
      (employee) => employee.teamName === "TeamC"
    );

    const teamC = {
      team: "TeamC",
      members: teamCMembers,
      collapsed: team === "TeamC" ? false : true,
    };

    // Team D
    const teamDMembers = employees.filter(
      (employee) => employee.teamName === "TeamD"
    );

    const teamD = {
      team: "TeamD",
      members: teamDMembers,
      collapsed: team === "TeamD" ? false : true,
    };

    teams.push(teamA);
    teams.push(teamB);
    teams.push(teamC);
    teams.push(teamD);

    return teams;
  }

  function handleTeamClick(event) {
    let newGroupData = groupedEmployees.map((groupedData) =>
      groupedData.team === event.currentTarget.id
        ? { ...groupedData, collapsed: !groupedData.collapsed }
        : groupedData
    );

    setgroupedEmployees(newGroupData);
  }

  return (
    <main className="container">
      {groupedEmployees.map((item) => {
        return (
          <div
            key={item.team}
            className="card mt-2"
            style={{ cursor: "pointer" }}
          >
            <h4
              id={item.team}
              className="card-header text-secondary bg-white"
              onClick={handleTeamClick}
            >
              Team Name: {item.team}
            </h4>
            <div
              id={"collapse_" + item.team}
              className={item.collapsed === true ? "collapse" : ""}
            >
              <hr />
              {item.members.map((member) => {
                return (
                  <div className="mt-2">
                    <h5 className="card-title mt-2">
                      <span className="text-dark">
                        Full Name: {member.fullName}
                      </span>
                    </h5>
                    <p>Designation: {member.designation}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default GroupedTeamMembers;
