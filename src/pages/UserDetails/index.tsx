import { FC } from "react";
import { BackIcon } from "../../svgIcons";

import "./userdetails.scss";
import { Link, useParams } from "react-router-dom";
// import Ratings from "react-ratings";
import Layout from "../../components/Layout";
import users from "../../global/MOCK_DATA.json";

const UserDetails: FC = () => {
  const { userId } = useParams();

  const userDetails:
    | { image: string; first_name: string; last_name: string }
    | any = users.find((user) => user.id === Number(userId));

  return (
    <Layout>
      <div className="userdetails">
        <Link to="/users">
          <div className="back">
            <BackIcon />
            <p>Back to Users</p>
          </div>
        </Link>
        <div className="header_container">
          <p className="header">User Details</p>
          <div className="buttons">
            <button className="button1">Blacklist User</button>
            <button className="button2">Activate User</button>
          </div>
        </div>

        <div className="profile_container">
          <div className="profile">
            <img src={userDetails.image} alt={userDetails.first_name} />
            <div className="profile1">
              <p className="name">{`${userDetails.first_name} ${userDetails.last_name}`}</p>
              <p className="id">LSQFf587g90</p>
            </div>
            <div className="line" />
            <div className="profile2">
              <p className="userstier">User’s Tier</p>
              {/* <div>
              <Ratings defaultRating={1} totalRating={3}  />
            </div> */}
            </div>
            <div className="line" />
            <div className="profile3">
              <p className="name">{userDetails.monthly_income}</p>
              <p className="id">9912345678/Providus Bank</p>
            </div>
          </div>
          <div className="navigation">
            <button style={{ borderBottom: "2px solid #39CDCC" }}>
              General Details
            </button>
            <button>Documents</button>
            <button>Bank Details</button>
            <button>Loans</button>
            <button>Savings</button>
            <button>App and System</button>
          </div>
        </div>
        <div className="overview">
          {/*  PERSONAL INFORMATION */}
          <div className="section">
            <p className="header">Personal Information</p>
            <div className="row">
              <div>
                <p className="title_name">full Name</p>
                <p className="title">Grace Effiom</p>
              </div>
              <div>
                <p className="title_name">Phone Number</p>
                <p className="title">07060780922</p>
              </div>
              <div>
                <p className="title_name">Email Address</p>
                <p className="title">grace@gmail.com</p>
              </div>
              <div>
                <p className="title_name">Bvn</p>
                <p className="title">07060780922</p>
              </div>
              <div>
                <p className="title_name">Gender</p>
                <p className="title">Female</p>
              </div>
            </div>
          </div>

          {/*  Education and Employment */}
          <div className="section">
            <p className="header">Education and Employment</p>
            <div className="row">
              <div>
                <p className="title_name">level of education</p>
                <p className="title">B.Sc</p>
              </div>
              <div>
                <p className="title_name">employment status</p>
                <p className="title">Employed</p>
              </div>
              <div>
                <p className="title_name">sector of employment</p>
                <p className="title">FinTech</p>
              </div>
              <div>
                <p className="title_name">Duration of employment</p>
                <p className="title">2 years</p>
              </div>
              <div>
                <p className="title_name">office email</p>
                <p className="title">grace@lendsqr.com</p>
              </div>
              <div>
                <p className="title_name">Monthly income</p>
                <p className="title">₦200,000.00- ₦400,000.00</p>
              </div>
              <div>
                <p className="title_name">loan repayment</p>
                <p className="title">40,000</p>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="section">
            <p className="header">Socials</p>
            <div className="row">
              <div>
                <p className="title_name">Twitter</p>
                <p className="title">@grace_effiom</p>
              </div>
              <div>
                <p className="title_name">Facebook</p>
                <p className="title">Grace Effiom</p>
              </div>
              <div>
                <p className="title_name">Instagram</p>
                <p className="title">@grace_effiom</p>
              </div>
            </div>
          </div>

          {/* Guarantor */}
          <div className="section">
            <p className="header">Guarantor</p>
            <div className="row">
              <div>
                <p className="title_name">full Name</p>
                <p className="title">Debby Ogana</p>
              </div>
              <div>
                <p className="title_name">Phone Number</p>
                <p className="title">07060780922</p>
              </div>
              <div>
                <p className="title_name">Email Address</p>
                <p className="title">debby@gmail.com</p>
              </div>
              <div>
                <p className="title_name">Relationship</p>
                <p className="title">Sister</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserDetails;
