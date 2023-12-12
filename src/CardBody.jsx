import SubscriptionPlan from "./SubscriptionPlan"
import PrimaryButton from "./PrimaryButton"
import "./CardBody.css"

function CancelOption() {
    return (<a href="#" className="cancel">Cancel Order</a>)
}

function CardTitle() {
    return (<h1>Order Summary</h1>)
}

function CardDescription() {
    return <p className="description">You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
}

export default function CardBody() {
    return (
        <div className="card-body">
            <CardTitle/>
            <CardDescription/>
            <SubscriptionPlan/>
            <PrimaryButton/>
            <CancelOption/>      
        </div>
    )
}