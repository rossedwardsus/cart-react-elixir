defmodule Sconely.ProcessStripePayment do

  def process_stripe_payment(args) do

       #new_customer = [
    #  email: "test@test.com",
    #  description: "An Test Account",
    #  metadata:[
    #    app_order_id: "ABC123"
    #    app_state_x: "xyz"
    #  ],
    #  card: [
    #    number: "4111111111111111",
    #    exp_month: 01,
    #    exp_year: 2018,
    #    cvc: 123,
    #    name: "Joe Test User"
    #  ]
    #]
    #{:ok, res} = Stripe.Customers.create new_customer


    #params[:payment_method_card_number]
    #params[:payment_method_expiry_month]
    #params[:payment_method_expiry_year]
    #params[:payment_method_security_code]

    #create customer for guest
    #create user profile

    params = [
        source: [
          object: "card",
          number: "4111111111111111",
          exp_month: 10,
          exp_year: 2020,
          country: "US",
          name: "Ducky Test",
          cvc: 123
        ],
        description: "Sconely order id for customer id"
      ]
  
    #IO.inspect(Stripe.Charges.create(51, params))

    #Stripe.Charges.create(51, params)

  end

end