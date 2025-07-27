import React, { useState } from 'react'
import '../App.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

export default function Checkoutpage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        companyName: "",
        country: "",
        streetAddress: "",
        townCity: "",
        postcode: "",
        phone: "",
        email: "",
        additionalInfo: "",
        paymentMethod: "", // Initialize paymentMethod to an empty string
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    return (
        <>
            <Navbar />
            <div className="billing-container">
                <div className="billing-form-section">
                    <h1>Billing details</h1>

                    <form onSubmit={(e) => {
                        e.preventDefault()
                        console.log("Form submitted:", formData)
                    }}>
                        <div className="name-row">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="First name"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Last name"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleChange}
                                placeholder="Company name (Optional)"
                            />
                        </div>

                        <div className="form-group">
                            <select name="country" value={formData.country} onChange={handleChange} required>
                                <option value="">State</option>
                                <option value="LA">Lagos</option>
                                <option value="EG">Enugu</option>
                                <option value="AJ">Abuja</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                name="streetAddress"
                                value={formData.streetAddress}
                                onChange={handleChange}
                                placeholder="Street address"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                name="townCity"
                                value={formData.townCity}
                                onChange={handleChange}
                                placeholder="Town / City"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                name="postcode"
                                value={formData.postcode}
                                onChange={handleChange}
                                placeholder="Postcode"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Phone"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email address"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <textarea
                                name="additionalInfo"
                                value={formData.additionalInfo}
                                onChange={handleChange}
                                placeholder="Additional information"
                                rows={4}
                            />
                        </div>

                        <button type="submit" className="submit-button">
                            Place order
                        </button>
                    </form>
                </div>

                <div className="order-summary">
                    <div className="summary-header">
                        <h2>Product</h2>
                        <h2>Subtotal</h2>
                    </div>
                    <div className="summary-item">
                        <span>Subtotal</span>
                        <span>₦50,000.00</span>
                    </div>
                    <div className="summary-item">
                        <span>Total</span>
                        <span className="total-amount">₦50,000.00</span>
                    </div>
                    <div className="payment-options">
                        <h2>Payment Method</h2>
                        <div className="payment-option">
                            <input
                                type="radio"
                                id="bank"
                                name="paymentMethod"
                                value="bank"
                                checked={formData.paymentMethod === 'bank'}
                                onChange={handleChange}
                            />
                            <label htmlFor="bank">Direct Bank Transfer</label>
                            <p className="payment-note">
                                Make your payment directly into our bank account. Please use your Order ID as the payment reference.
                            </p>
                        </div>
                        <div className="payment-option">
                            <input
                                type="radio"
                                id="cash"
                                name="paymentMethod"
                                value="cash"
                                checked={formData.paymentMethod === 'cash'}
                                onChange={handleChange}
                            />
                            <label htmlFor="cash">Cash on Delivery</label>
                            <p className="payment-note">
                                Pay with cash upon delivery.
                            </p>
                        </div>
                        <div className="payment-option">
                            <input
                                type="radio"
                                id="card"
                                name="paymentMethod"
                                value="card"
                                checked={formData.paymentMethod === 'card'}
                                onChange={handleChange}
                            />
                            <label htmlFor="card">Credit/Debit Card</label>
                            <p className="payment-note">
                                Pay securely using your credit or debit card.
                            </p>
                        </div>
                        <div className="payment-option">
                            <input
                                type="radio"
                                id="upi"
                                name="paymentMethod"
                                value="upi"
                                checked={formData.paymentMethod === 'upi'}
                                onChange={handleChange}
                            />
                            <label htmlFor="upi">UPI Payment</label>
                            <p className="payment-note">
                                Pay using your preferred UPI app.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
