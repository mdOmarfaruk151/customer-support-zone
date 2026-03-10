const tickets = [
  {
    id: '1001',
    title: "Login Issues - Can’t Access Account",
    description:
      'Customer is locked out after multiple password attempts and the reset email is not arriving.',
    customer: 'John Smith',
    priority: 'High',
    status: 'Open',
    createdAt: '2024-11-15',
  },
  {
    id: '1002',
    title: 'Payment Failed - Card Declined',
    description:
      'Card ending 1234 keeps declining despite sufficient balance. Merchant and issuer both show no blocks.',
    customer: 'Sarah Johnson',
    priority: 'High',
    status: 'Open',
    createdAt: '2024-11-16',
  },
  {
    id: '1003',
    title: 'Unable to Download Invoice',
    description:
      'Invoice PDF link returns a 404 for January billing cycle. Customer needs it for accounting.',
    customer: 'Michael Brown',
    priority: 'Medium',
    status: 'In-Progress',
    createdAt: '2024-11-17',
  },
  {
    id: '1004',
    title: 'Incorrect Billing Address',
    description:
      'Billing address shows an old city despite profile update and confirmed email notification.',
    customer: 'Emily Davis',
    priority: 'Low',
    status: 'Open',
    createdAt: '2024-11-18',
  },
  {
    id: '1005',
    title: 'App Crash on Launch',
    description:
      'Mobile app crashes immediately on Android 13 for devices with biometric login enabled.',
    customer: 'David Wilson',
    priority: 'High',
    status: 'Open',
    createdAt: '2024-11-19',
  },
  {
    id: '1006',
    title: 'Refund Not Processed',
    description:
      'Refund requested two weeks ago is still pending. Customer wants an ETA and confirmation.',
    customer: 'Sophia Taylor',
    priority: 'Medium',
    status: 'In-Progress',
    createdAt: '2024-11-20',
  },
  {
    id: '1007',
    title: 'Two-Factor Authentication Issue',
    description:
      'User is not receiving 2FA codes on verified phone number. SMS carrier reports no issues.',
    customer: 'James Anderson',
    priority: 'High',
    status: 'Open',
    createdAt: '2024-11-21',
  },
  {
    id: '1008',
    title: 'Unable to Update Profile Picture',
    description:
      'Upload fails with “Upload failed” error even for valid JPG files under 2MB.',
    customer: 'Olivia Martinez',
    priority: 'Low',
    status: 'Open',
    createdAt: '2024-11-22',
  },
  {
    id: '1009',
    title: 'Subscription Auto-Renewal Disabled',
    description:
      'Customer wants to re-enable auto-renewal but toggle keeps resetting after save.',
    customer: 'Liam Thomas',
    priority: 'Medium',
    status: 'In-Progress',
    createdAt: '2024-11-23',
  },
  {
    id: '1010',
    title: 'Missing Order Confirmation Email',
    description:
      'Order placed successfully but confirmation email never arrived; needs receipt and order ID.',
    customer: 'Isabella Garcia',
    priority: 'Medium',
    status: 'Open',
    createdAt: '2024-11-24',
  },
];

export default tickets;
