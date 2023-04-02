import { FC, useContext, useEffect } from "react";
import { BackIcon, Star, StarOutLine } from "../../svgIcons";

import "./userdetails.scss";
import { Link, useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import { UserContext } from "../../providers/UserProvider";

const UserDetails: FC = () => {
  const { userId }: any = useParams();
  const { singleUser, getSingleUser } = useContext(UserContext);

  useEffect(() => {
    getSingleUser(userId);
  }, []);

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
            <img
              src={singleUser.data.profile.avatar}
              alt={singleUser.data.profile.firstName}
            />
            <div className="profile1">
              <p className="name">{`${singleUser.data.profile.firstName} ${singleUser.data.profile.lastName}`}</p>
              <p className="id">{singleUser.data.userName}</p>
            </div>
            <div className="line" />
            <div className="profile2">
              <p className="userstier">User’s Tier</p>
              <div>
                {Array(3)
                  .fill("")
                  .map((_, i) => (2 >= i + 1 ? <Star /> : <StarOutLine />))}
              </div>
            </div>
            <div className="line" />
            <div className="profile3">
              <p className="name">${singleUser.data.accountBalance}</p>
              <p className="id">
                {singleUser.data.accountNumber}/Providus Bank
              </p>
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
                <p className="title">{`${singleUser.data.profile.firstName} ${singleUser.data.profile.lastName}`}</p>
              </div>
              <div>
                <p className="title_name">Phone Number</p>
                <p className="title">{singleUser.data.profile.phoneNumber}</p>
              </div>
              <div>
                <p className="title_name">Email Address</p>
                <p className="title">{singleUser.data.email}</p>
              </div>
              <div>
                <p className="title_name">Bvn</p>
                <p className="title">{singleUser.data.profile.bvn}</p>
              </div>
              <div>
                <p className="title_name">Gender</p>
                <p className="title text-upper">
                  {singleUser.data.profile.gender}
                </p>
              </div>
            </div>
          </div>

          {/*  Education and Employment */}
          <div className="section">
            <p className="header">Education and Employment</p>
            <div className="row">
              <div>
                <p className="title_name">level of education</p>
                <p className="title">{singleUser.data.education.level}</p>
              </div>
              <div>
                <p className="title_name">employment status</p>
                <p className="title">
                  {singleUser.data.education.employmentStatus}
                </p>
              </div>
              <div>
                <p className="title_name">sector of employment</p>
                <p className="title">{singleUser.data.education.sector}</p>
              </div>
              <div>
                <p className="title_name">Duration of employment</p>
                <p className="title">{singleUser.data.education.duration}</p>
              </div>
              <div>
                <p className="title_name">office email</p>
                <p className="title">{singleUser.data.education.officeEmail}</p>
              </div>
              <div>
                <p className="title_name">Monthly income</p>
                {/* <p className="title">{₦200,000.00- ₦400,000.00}</p> */}
                <p className="title">
                  {singleUser.data.education.monthlyIncome.map((income, i) => (
                    <span>
                      {`₦${income}`}{" "}
                      {i + 1 < singleUser.data.education.monthlyIncome.length
                        ? "- "
                        : ""}
                    </span>
                  ))}
                </p>
              </div>
              <div>
                <p className="title_name">loan repayment</p>
                <p className="title">
                  {singleUser.data.education.loanRepayment}
                </p>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="section">
            <p className="header">Socials</p>
            <div className="row">
              <div>
                <p className="title_name">Twitter</p>
                <p className="title">{singleUser.data.socials.twitter}</p>
              </div>
              <div>
                <p className="title_name">Facebook</p>
                <p className="title">{singleUser.data.socials.facebook}</p>
              </div>
              <div>
                <p className="title_name">Instagram</p>
                <p className="title">{singleUser.data.socials.instagram}</p>
              </div>
            </div>
          </div>

          {/* Guarantor */}
          <div className="section">
            <p className="header">Guarantor</p>
            <div className="row">
              <div>
                <p className="title_name">full Name</p>
                <p className="title">{`${singleUser.data.guarantor.firstName} ${singleUser.data.guarantor.lastName}`}</p>
              </div>
              <div>
                <p className="title_name">Phone Number</p>
                <p className="title">{singleUser.data.guarantor.phoneNumber}</p>
              </div>
              <div>
                <p className="title_name">Address</p>
                <p className="title">{singleUser.data.guarantor.address}</p>
              </div>
              <div>
                <p className="title_name">Gender</p>
                <p className="title text-upper">
                  {singleUser.data.guarantor.gender}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserDetails;
