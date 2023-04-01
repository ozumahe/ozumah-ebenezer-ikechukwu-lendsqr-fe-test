import { FC, useState } from "react";
import { ActiveUser, BlacklistUser, Option, View } from "../../../svgIcons";
import usersData from "../../../global/MOCK_DATA.json";
import { useNavigate } from "react-router-dom";

const BodyItem: FC = () => {
  const [showOption, setShowOption] = useState(false);
  const navigate = useNavigate();

  const userStatusColor = (status: string) => {
    switch (status) {
      case "inactive":
        return "#545F7D";
      case "pending":
        return "#E9B200";
      case "blacklisted":
        return "#E4033B";
      case "active":
        return "#39CD62";
      default:
        break;
    }
  };

  const userStatusBgColor = (status: string) => {
    switch (status) {
      case "inactive":
        return "rgba(84, 95, 125, 0.1)";
      case "pending":
        return "rgba(233, 178, 0, 0.1)";
      case "blacklisted":
        return "rgba(228, 3, 59, 0.1)";
      case "active":
        return "rgba(57, 205, 98, 0.1)";
      default:
        break;
    }
  };

  return (
    <>
      {usersData.map((data: any, i: number) => (
        <tr key={i}>
          <td>
            <p>
              {data.company_name.length > 7
                ? data.company_name.substring(0, 7)
                : data.company_name}
            </p>
          </td>
          <td>
            <p>{data.username}</p>
          </td>
          <td>
            <p>{data.email}</p>
          </td>
          <td>
            <p>{data.phone_number}</p>
          </td>
          <td>
            <p>{data.date_joined}</p>
          </td>
          <td>
            <button
              style={{
                background: userStatusBgColor(data.status.toLocaleLowerCase()),
                color: userStatusColor(data.status.toLocaleLowerCase()),
              }}
            >
              {data.status}
            </button>
          </td>
          <td>
            <div className="table__options__container">
              <Option />
              <div className="table__options">
                <div
                  className="table__option"
                  onClick={() => navigate(`/user/${data.id}/details`)}
                >
                  <View /> <p>View Details</p>
                </div>
                <div className="table__option">
                  <BlacklistUser /> <p>Blacklist User</p>
                </div>
                <div className="table__option">
                  <ActiveUser /> <p>Activate User</p>
                </div>
              </div>
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default BodyItem;
