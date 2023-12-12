import "./SubscriptionPlan.css"

export default function SubscriptionPlan() {
    return (
        <div className="sp-container">
            <img src="icon-music.svg" alt="" />
            <div>
                <p>Annual Plan</p>
                <p className="price">$59.99/year</p>
            </div>
            <a href="#">Change</a>
        </div>
    )
}