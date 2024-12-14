import './style.scss'
import img from '../../../assets/flag+city.png'

const ThankYou = () => {
    return (
        <div className='thankYou'>
            <div className="image">
                <img src={img} alt="" />
            </div>
            <div className="text">
                <h1>thank you!</h1>
                <p>Thank you for choosing us!</p>
                <p>A confirmation email with all the details <br /> and information will be sent to you shortly.</p>
                <p>Go back to the <span> homepage</span>.</p>
            </div>
        </div>
    )
}

export default ThankYou