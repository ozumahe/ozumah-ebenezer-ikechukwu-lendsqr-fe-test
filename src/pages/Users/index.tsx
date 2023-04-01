import { FC } from "react";
import Layout from "../../components/Layout";
import { Card, Table } from "../../components/Users";
import "./users.scss";
import {
  Users2,
  ActiveUsers,
  UserswithLoans,
  UserswithSavings,
} from "../../svgIcons";
import users from "../../global/MOCK_DATA.json";

const Users: FC = () => {
  const activeusers = users.filter((user) => user.status === "active");
  const userWithLoans = users.filter((user) => user.status === "inactive");
  const usersWithoutSavins = users.filter(
    (user) => user.status === "blacklisted"
  );

  return (
    <Layout>
      <div className="users">
        <p className="header">Users</p>
        <div className="users_container">
          <Card Icon={Users2} title="Users" total={users.length} />
          <Card
            Icon={ActiveUsers}
            title="Active Users"
            total={activeusers.length}
          />
          <Card
            Icon={UserswithLoans}
            title="Users with Loans"
            total={userWithLoans.length}
          />
          <Card
            Icon={UserswithSavings}
            title="Users with Savings"
            total={usersWithoutSavins.length}
          />
        </div>
        <div className="table">
          <Table />
        </div>
      </div>
    </Layout>
  );
};

export default Users;
