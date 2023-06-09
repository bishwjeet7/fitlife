import React from 'react'
import '../Newsletter.css'

function Newsletter() {
  return (
    <>
        <section className="subscription bg-white">
  <div className="container_newslatter">
    <div className="row">
      <div className="col-lg-12">
        <div className="subscription-wrapper">
          <div className="d-flex subscription-content justify-content-between align-items-center flex-column flex-md-row text-center text-md-left">
            <h3 className="flex-fill">Subscribe <br></br> to our newsletter</h3>
            <form action="#" className="row flex-fill">
              <div className="col-lg-7 my-md-2 my-2">
                <input type="email" className="form-control px-4 border-0 w-100 text-center text-md-left" id="email" placeholder="Your Email" name="email"/>
              </div>
              <div className="col-lg-5 my-md-2 my-2">
                <button type="submit" className="btn btn-primary btn-lg border-0 w-100">Subscribe Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Newsletter