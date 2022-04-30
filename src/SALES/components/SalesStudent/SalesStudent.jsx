import React from 'react'
import './SalesStudent.css';
import { StudentReview } from '../../miniComponent/StudentReviewDetails/StudentReview'

const SalesStudent = () => {
    // 2,3,4,5,6,7,8,9
    const array = [1, ]
  return (
   <div className="salesStudent salesContainer">
       <h3>Student Component</h3>

        <div className="salesStudent__reviews">
            {
                StudentReview.map((studentReview) => (
                    <div className="salesStudent__review">
                        {/* <h1>{list}</h1> */}
                        <div className="salesStudent__reviewTop">
                            <img src={studentReview.image} alt="studentImage" style={{ border: `4px solid ${studentReview.circleColor}` }} />
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

            <button>
                Pre-Order
            </button>
        </div>
   </div>
  )
}

export default SalesStudent