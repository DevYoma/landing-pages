import React from 'react'
import './SalesStudent.css';
import { StudentReview } from '../../miniComponent/StudentReviewDetails/StudentReview'
import { paymentLink } from '../../utils';

const SalesStudent = () => {
    const handleClick = () => {
        // window.location.href="https://paystack.com/pay/learnwithayodejiomonijo"
        window.location.href=`${paymentLink}`
    }
  return (
   <div className="salesStudent salesContainer">
       <h3>Student Reviews</h3>

        <div className="salesStudent__reviews">
            {
                StudentReview.map((studentReview) => (
                    <div key={studentReview.id} className="salesStudent__review">
                        {/* <h1>{list}</h1> */}
                        <div className="salesStudent__reviewTop">
                            <img src={studentReview.image} alt="studentImage" style={{ padding: "3px",border: `4px solid ${studentReview.circleColor}` }} />
                            <div>
                                <h2>{studentReview.name}</h2>
                                <p>UI/UX designer</p>
                            </div>
                        </div>

                        <div className="salesStudent__reviewBottom">
                            <p>{studentReview.testimonial}</p>
                        </div>  
                    </div>
                ))
            }
        </div>

        <div className="salesStudent__preOrder">
            <div>
                <p>Ready to become a UI/UX</p>
                <p>designer? Pre-order Now!</p>
            </div>

            <div>
                <button onClick={handleClick}>
                    Buy Now
                </button>
                <div className="salesLearnPricing">
                    <p className="pricing1">&#8358;15,000</p>
                    <p className="pricing2">&#8358;20,000</p>
                </div>
            </div>
           
        </div>
   </div>
  )
}

export default SalesStudent