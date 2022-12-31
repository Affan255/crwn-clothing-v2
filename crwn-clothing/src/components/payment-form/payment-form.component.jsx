import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartItems } from '../../store/cart/cart.selector'
import { selectCurrentUser } from '../../store/user/user.select'
import { setCartIems } from '../../store/cart/cart.action'
import {
  FormContainer,
  PaymentButton,
  PaymentFormContainer
} from './payment-form.styles'

const PaymentForm = () => {
  const stripe = useStripe()
  const elements = useElements()
  const { total } = useSelector(selectCartItems)
  const dispatch = useDispatch()
  const user = useSelector(selectCurrentUser)
  const [isProcessingPament, setProcessingPayment] = useState(false)

  const paymentHandler = async (e) => {
    e.preventDefault()
    if (!stripe || !elements) return
    setProcessingPayment(true)
    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ amount: total * 82 * 100 })
    }).then((res) => res.json())
    const clientSecret = response.paymentIntent.client_secret
    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: user ? user.displayName : 'Guest'
        }
      }
    })
    dispatch(setCartIems([]))
    setProcessingPayment(false)
    if (paymentResult.error) alert(paymentResult.error.message)
    else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('Payment Successful')
      }
    }
  }
  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment</h2>
        <CardElement />
        <PaymentButton isLoading={isProcessingPament}>Pay now</PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  )
}

export default PaymentForm
