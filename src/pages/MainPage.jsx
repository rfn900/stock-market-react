import React from 'react'
import {Link} from 'react-router-dom'

export default function MainPage() {
    return (
        <>
            <h3>Main page</h3>
            <div className="row">
                <div className="card col-6">
                    <Link to="/crypto">
                        <div className="card-body">
                            <h5 className="card-title">Crypto</h5>
                        </div>
                    </Link>
                </div>
                <div className="card col-6">
                    <Link to="/currencies">
                        <div className="card-body">
                            <h5 className="card-title">Currencies</h5>
                        </div>
                    </Link>
                </div>
                <div className="card col-6">
                    <Link to="/indexes">
                        <div className="card-body">
                            <h5 className="card-title">Indexes</h5>
                        </div>
                    </Link>
                </div>
                <div className="card col-6">
                    <Link to="/markets">
                        <div className="card-body">
                            <h5 className="card-title">Markets</h5>
                        </div>
                    </Link>
                </div>
            </div>
        </>

    )
}
