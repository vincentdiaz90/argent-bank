import React from 'react'
import './UserTransaction.css'

export default function UserTransaction({title, transaction, description}) {
  return (
    <section className="user">
        <div className="user-content-wrapper">
            <h3 className="user-title">{title}</h3>
            <p className="user-amount">{transaction}</p>
            <p className="user-amount-description">{description}</p>
        </div>
        <div className="user-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
        </div>
    </section>
  )
}
