import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";
import enrolledFriends from "../../data";
import "./ReferredFriends.css";

const ReferredFriends = () => {
    return (
        <div className="referred_friends">
            <Navbar />
            <div className="account--info">
                <h6 className="font-weight-400">UI/UX > Refer & Earn > Friends Referred</h6>
                <div className="code--and--balance">
                    <div className="referral--code">
                        <h4>Your Referral Code</h4>
                        <p>EDCH54</p>
                    </div>
                    <div className="wallet--balance">
                        <h4>Wallet Balance</h4>
                        <p>₹ 500</p>
                    </div>
                </div>
            </div>
            <div className="enrolled--friends">
                <h3>Friends who enrolled({enrolledFriends.length})</h3>
                <div className="friends">
                    {enrolledFriends.map(friend => {
                        return <Card friend={friend} />
                    })}
                </div>
            </div>
            <p className="links" style={{ marginLeft: "1.25rem" }}>Terms & Conditions</p>
        </div>
    )
}

export default ReferredFriends;