import { CgProfile } from "react-icons/cg";
import { FaAngleDown } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { BsTagFill } from "react-icons/bs";
import { BsCurrencyRupee } from "react-icons/bs";
import { AiOutlinePercentage } from "react-icons/ai";
import { IoMdWallet } from "react-icons/io"
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./Dashboard.css";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Navbar />
            <div className="dashboard--refer-and-earn">
                <h6 className="font-weight-400" style={{ marginLeft: "20px" }}>UI/UX > Refer & Earn</h6>
                <div className="referral">
                    <div className="referral--box">
                        <div className="referrals">
                            <div className="referral--info">
                                <h5 className="font-weight-400" style={{ backgroundColor: "white" }}>Referral Earning</h5>
                                <h2 className="font-weight-500" style={{ color: "black", backgroundColor: "white" }}>2500</h2>
                            </div>
                            <div className="referral--info">
                                <h5 className="font-weight-400" style={{ backgroundColor: "white" }}>Total Referrals</h5>
                                <h2 className="font-weight-500" style={{ color: "black", backgroundColor: "white" }}>7</h2>
                            </div>
                            <div className="referral--info">
                                <h5 className="font-weight-400" style={{ backgroundColor: "white" }}>Wallet Balance</h5>
                                <h2 className="font-weight-500" style={{ color: "black", backgroundColor: "white" }}>500</h2>
                            </div>
                        </div>
                        <button type="button" id="withdraw-balance">Withdraw Balance</button>
                    </div>
                    <div className="referral--code--box">
                        <h2>Your Referral Code</h2>
                        <div className="referral-code">
                            EDCH54
                        </div>
                    </div>
                </div>
            </div>
            <div className="dashboard--about">
                <h3>How does it work?</h3>
                <div className="steps">
                    <div className="step">
                        <div className="icons">
                            <IoIosPeople className="icon" />
                        </div>
                        <div className="step-detail">
                            <h5>Invite your friends</h5>
                            <p className="detail">Share the link tutedude.com with your friends</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="icons">
                            <BsTagFill className="icon" />
                        </div>
                        <div className="step-detail">
                            <h5>Friend purchases any course</h5>
                            <p className="detail">Using your REFERRAL CODE in the payments page</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="icons">
                            <BsCurrencyRupee className="icon" />
                        </div>
                        <div className="step-detail">
                            <h5>You get ₹ 200 as referral money</h5>
                            <p className="detail">On total purchase the friend makes, into your wallet</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="icons">
                            <AiOutlinePercentage className="icon" />
                        </div>
                        <div className="step-detail">
                            <h5>Your Friend gets ₹ 200 off</h5>
                            <p className="detail">On his overall fee on successful purchase using your referral code</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="icons">
                            <IoMdWallet className="icon" />
                        </div>
                        <div className="step-detail">
                            <h5>Transfer money from wallet</h5>
                            <p className="detail">When the wallet balance reaches ₹200 or more, you can withdraw it</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dashboard--links">
                <Link to={"/referred"} style={{ textDecoration: "none" }}><p className="links">Friends Who Enrolled</p></Link>
                <p className="links">Terms & Conditions</p>
            </div>
        </div>
    )
}

export default Dashboard;