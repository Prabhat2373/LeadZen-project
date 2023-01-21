import React from 'react'

const Pagination = () => {
  return (
    <>
      <div className="pagination:container justify-center">
        <div className="pagination:number arrow">
          <svg width="18" height="18">
            <use xlinkHref="#left" />
          </svg>
          <span className="arrow:text">Previous</span>
        </div>

        <div className="pagination:number">
          1
        </div>
        <div className="pagination:number">
          2
        </div>

        <div className="pagination:number pagination:active">
          3
        </div>

        <div className="pagination:number">
          4
        </div>

        <div className="pagination:number">
          540
        </div>

        <div className="pagination:number arrow">
        Next
          <svg width="18" height="18">
            <use xlinkHref="#right" />
          </svg>
        </div>
      </div>

      <svg className="hide">
        <symbol id="left" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></symbol>
        <symbol id="right" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></symbol>
      </svg>
    </>
  )
}

export default Pagination   