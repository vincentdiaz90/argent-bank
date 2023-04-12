import React from 'react'
import iconChat from '../../../asset/images/icon-chat.png'
import iconMoney from '../../../asset/images/icon-money.png'
import iconSecurity from '../../../asset/images/icon-security.png'
import HomeTool from '../../../Components/HomeTool/HomeTool'

import './Home.css'

export default function Home() {

  return (
    <>
        <main>
            <div className="hero">
            <section className="hero-content">
                <h2 className="sr-only">Promoted Content</h2>
                <p className="subtitle">No fees.</p>
                <p className="subtitle">No minimum deposit.</p>
                <p className="subtitle">High interest rates.</p>
                <p className="text">Open a savings account with Argent Bank today!</p>
            </section>
            </div>
            <section className="features">
                <h2 className="sr-only">Features</h2>
                <HomeTool imgSrc={iconChat} imgAlt="Chat Icon" title="You are our #1 priority" description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes." />
                <HomeTool imgSrc={iconMoney} imgAlt="Money Icon" title="More savings means higher rates" description="The more you save with us, the higher your interest rate will be!" />
                <HomeTool imgSrc={iconSecurity} imgAlt="Security Icon" title="Security you can trust" description="We use top of the line encryption to make sure your data and money is always safe." />
            </section>
        </main>
    </>
    
  )
}





    
   

