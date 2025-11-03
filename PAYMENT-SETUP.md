# Payment Gateway Setup Guide

## Razorpay Integration

The consultation booking system now includes Razorpay payment gateway integration for secure online payments.

### Setup Instructions

1. **Get Razorpay API Keys**
   - Sign up at [https://razorpay.com](https://razorpay.com)
   - Navigate to Settings → API Keys
   - Generate your Test and Live keys

2. **Update Payment Configuration**
   - Open `consult.html`
   - Find line: `key: 'rzp_test_1234567890'`
   - Replace with your actual Razorpay key:
     - For testing: Use Test Key (starts with `rzp_test_`)
     - For production: Use Live Key (starts with `rzp_live_`)

3. **Test the Integration**
   - Use Razorpay test cards for testing:
     - Card: 4111 1111 1111 1111
     - CVV: Any 3 digits
     - Expiry: Any future date
   - Test different scenarios:
     - Successful payment
     - Payment cancellation
     - Payment failure

### Pricing Structure

| Consultation Type | Amount (INR) |
|-------------------|--------------|
| Video Call        | ₹499         |
| Audio Call        | ₹299         |
| Chat              | ₹199         |
| Emergency         | ₹999         |

### Features Implemented

✅ **Payment Processing**
- Secure Razorpay checkout modal
- Automatic amount calculation based on consultation type
- Customer data pre-filling (name, email, phone)

✅ **Success Handling**
- Payment ID captured and stored
- Booking confirmation with payment details
- Animated success modal with confetti
- Email confirmation sent to patient

✅ **Error Handling**
- Payment cancellation detection
- Failed payment alerts
- Custom animated modal notifications
- User-friendly error messages

✅ **User Experience**
- Smooth animations and transitions
- Responsive payment modal
- Loading states during processing
- Auto-dismissing info messages

### Payment Flow

1. User fills consultation form
2. Clicks "Confirm Booking"
3. Razorpay checkout opens with amount
4. User completes payment
5. Payment ID returned on success
6. Booking saved with payment details
7. Success modal displayed
8. Email confirmation sent

### Security Notes

- Never commit API keys to version control
- Use environment variables for production
- Keep Test and Live keys separate
- Enable webhook signatures for enhanced security
- Implement server-side verification (recommended)

### Webhook Setup (Optional but Recommended)

For production, set up webhooks to verify payments server-side:

1. Go to Razorpay Dashboard → Settings → Webhooks
2. Add webhook URL: `https://yourdomain.com/payment-webhook`
3. Select events: `payment.captured`, `payment.failed`
4. Verify webhook signature in your backend

### Troubleshooting

**Issue: Payment modal not opening**
- Check if Razorpay script is loaded
- Verify API key is correct
- Check browser console for errors

**Issue: Payment succeeds but booking fails**
- Check localStorage quota
- Verify database connection
- Check browser console logs

**Issue: Amount showing as 0**
- Verify consultation type selection
- Check prices object in code
- Ensure amount calculation is correct

### Support

For Razorpay-specific issues:
- Documentation: [https://razorpay.com/docs](https://razorpay.com/docs)
- Support: support@razorpay.com

For integration issues:
- Check browser console for errors
- Review payment flow in code
- Test with Razorpay test cards first
