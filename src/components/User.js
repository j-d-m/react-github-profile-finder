import React from "react";

export default function User({ userdata }) {
  console.log(userdata);
  return (
    <div className="user">
      <div className="image">
        <img src={userdata.avatar_url} alt="" width="300" />
      </div>

      <table>
        <tbody>
          <tr>
            <td>Name: {userdata.name}</td>
            <td>Location: {userdata.location}</td>
          </tr>
          <tr>
            <td>Email: {userdata.email ? userdata.email : "no email found"}</td>
            <td>Followers: {userdata.followers}</td>
          </tr>
          <tr>
            <td>Repositories: {userdata.public_repos}</td>
            <td>Repo URL: {userdata.repos_url}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
