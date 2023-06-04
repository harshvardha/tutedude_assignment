import "./Card.css";

const Card = ({ friend }) => {
    return (
        <div className="card">
            <div className="name--and--date">
                <p style={{ fontWeight: "700", fontSize: "1rem" }}>{friend.name}</p>
                <p className="font-weight-400" style={{ fontSize: "0.875rem" }}>{friend.date}</p>
            </div>
            <div className="coursesEnrolled">
                <p style={{ fontWeight: "500", fontSize: "0.875rem" }}>Courses Enrolled({friend.coursesEnrolled.length})</p>
                <div className="courses">
                    {friend.coursesEnrolled.map(course => <p className="course">{course}</p>)}
                </div>
            </div>
            <p>Referred Amount <span className="referredAmount">{friend.referredAmount}</span></p>
        </div>
    )
}

export default Card;