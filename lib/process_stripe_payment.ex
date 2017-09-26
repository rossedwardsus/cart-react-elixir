defmodule Sconely.ProcessStripePayment do

  def process_stripe_payment(args) do

    #total cost == total items * 12
    

    #if order_type == "sconely_social"
    
    #total_cost = Enum.reduce(cart_items, fn(x) ->

    #    case x[:item_type] do

    #      "mini" ->  acc = acc + (1 * 5)

    #      "regular" -> acc = acc + (1 * 6)

    #    end

    #end)

    #Enum.filter([1, 2, 3], fn(x) -> rem(x, 2) == 0 end)

    mini_items_count = 0
    regular_items_count = 0

    mini_items_total_amount = 0
    regular_items_total_amount = 0

    total_items_count = 0
    total_cost = 0.00

    #order_type = "social"

    #cart_items = [%{"item_type": "mini", "item_id": 1, "quantity": 5}, %{"item_type": "mini", "item_id": 1, "quantity": 8}, %{"item_type": "regular", "item_id": 1, "quantity": 15}]
    #total_cost = 0

    cart_items = [%{id: 1, "title": "rubyq", twelveortwentyfourminis: "24_minis", quantity: 2}, %{id: 2, "title": "ishkabible", twelveortwentyfourminis: "12", quantity: 1}, %{id: 2, "title": "ishkabible", twelveortwentyfourminis: "12", quantity: 1}]

    order_type = "social"

    #total cost
    case order_type do

        "yours" -> 
                  total_cost = cart_items
                    |> Enum.reduce({0}, fn %{"quantity": quantity}, {count} -> {count = count + quantity} end)


        "social" -> 

                  #mini_items = Enum.filter(cart_items, fn(x) ->  

                   #   x[:twelveortwentyfourminis] == "twelve"

                  #end)

                  #Enum.map(mini_items, fn(x) -> 

                  #    mini_total = x[:quantity]

                  #end)

                  #mini_total = Enum.reduce(mini_items, {0}, fn %{"quantity": quantity}, {count} -> {count = count + quantity} end)

                  regular_items_total_amount = cart_items
                    |> Enum.filter(fn(x) ->  x[:twelveortwentyfourminis] == "12" end)
                    |> Enum.reduce({0}, fn %{"quantity": quantity}, {count} -> {count = count + quantity} end)

                  #regular_items_count = length(Enum.filter(cart_items, fn(x) ->  

                  #    x[:item_type] == "regular"

                  #end))

                  mini_items_total_amount = cart_items
                    |> Enum.filter(fn(x) ->  x[:twelveortwentyfourminis] == "24_minis" end)
                    |> Enum.reduce({0}, fn %{"quantity": quantity}, {count} -> {count = count + quantity} end)

                  #items_count = 1

        "pool" -> 
                  total_cost = cart_items
                    |> Enum.reduce({0}, fn %{"quantity": quantity}, {count} -> {count = count + quantity} end)

    end

    total_cost = (elem(mini_items_total_amount, 0) * 24 * 5.00) + (elem(regular_items_total_amount, 0) * 12 * 5.00)

    #IO.puts("process stripe payment")
    #IO.inspect(elem(regular_items_total_amount, 0))
    #IO.inspect(total_cost)


    cart_items = [%{"quantity": 1, "mini": false}, %{"quantity": 2, "mini": true}]


    #total_cost = Enum.reduce(cart_items, 0, fn(%{"quantity": quantity, "mini": mini}, count) -> 
    #    case mini do
    #      false ->  IO.puts("false")
    #                count + (quantity * 1.00)
    #      true -> IO.puts("true")
    #              count + (quantity * 2.00)
    #    end
    #end)

    #IO.puts("total_cost")
    #IO.puts(total_cost)

    promo_code_discount = 0;

    promo_code = "8thandhope"

    case promo_code do

      "8thandhope" -> promo_code_discount = 10
      "grain" -> promo_code_discount = 10

    end

    total_cost_with_promo_discount = total_cost - total_cost * (promo_code_discount/100)

    

    IO.puts("promo_code_discount")
    IO.puts(total_cost_with_promo_discount)


 
    #amount = Enum.reduce(args[:cart_items], 0, fn %{quantity: quantity}, count -> count = count + quantity * 5.50 end)

    #IO.inspect(amount * 100 )

    IO.puts("card data from app")
    #IO.inspect(Stripe.Token.create(%{:card => %{"number" => args[:payment_method_card_number], "exp_month" => args[:payment_method_expiry_month], "exp_year" => args[:payment_method_expiry_year], "cvc" => args[:payment_method_security_code], "address_zip" => "90025"}}))

    #case Stripe.Token.create(%{:card => %{"number" => args[:payment_method_card_number], "exp_month" => args[:payment_method_expiry_month], "exp_year" => args[:payment_method_expiry_year], "cvc" => args[:payment_method_security_code], "address_zip" => "90025"}}) do

    #IO.puts("test card date")
    #fraudulent
    #case Stripe.Token.create(%{:card => %{"number" => "4100000000000019", "exp_month" => 9, "exp_year" => 2018, "cvc" => "314", "address_zip" => "90025"}}) do

    #cvc
    #case Stripe.Token.create(%{:card => %{"number" => "4000000000000127", "exp_month" => 9, "exp_year" => 2018, "cvc" => "314", "address_zip" => "90025", "name" => "Ross Edwards"}}) do

    #case Stripe.Token.create(%{:card => %{"number" => "4000000000000077", "exp_month" => 9, "exp_year" => 2018, "cvc" => "314", "address_zip" => "90025", "name" => "Ross Edwards"}}) do

        #IO.inspect(token["id"])  

        #{:ok, token} -> {:ok, token}

            #case Stripe.Charge.create(%{:amount => 50, :currency => "usd", :source => token["id"], :description => "Charge for Sconely.com"}) do

            #  {:ok, charge} -> #IO.inspect("")
            #                   {:ok, charge}
            #  {:error, error} -> {:error, error}

            #end

        #{:error, error} -> {:error, error}

    #end

    #cus_BK3lQMlABIOi2V
    #card_1AxPeJH6MNtZcTO4e0w0tCCL

    #customer = Stripe.Customer.create(email: "example@gmail.com", source: %{object: "card", number: "4242424242424242", exp_month: 9, exp_year: 2018, cvc: "314"})

    #case customer do

    #  {:ok, customer} -> #IO.inspect(customer)
    #      {:ok, customer}
            {:ok, ""}
    #  {:error, error} -> #IO.inspect(error)
    #      {:error, error}

    #end

    #token = Stripe.Token.create(card: %{number: "4242424242424242", exp_month: 9, exp_year: 2018, cvc: "314"})
    #token = Stripe.Token.create(customer: "cus_BK3lQMlABIOi2V", card: "card_1AxPeJH6MNtZcTO4e0w0tCCL")

    #case token do

    #  {:ok, token} -> IO.inspect(token)
    #  {:error, error} -> IO.inspect(error)

    #end

    #existing_customer = Stripe.Customer.retrieve("cus_BK30g9Fg4KNza3")

    #case existing_customer do

    #  {:ok, existing_customer} -> IO.inspect(existing_customer)
                                  #source = existing_customer.source.create("sources": "card_1AxP6WH6MNtZcTO4KImodL8Z")
     #                             sources = existing_customer["sources"]
     #                             sources.create(token: "card_1AxPP0H6MNtZcTO4fmhS5KUV")

     # {:error, error} -> IO.inspect(error)

    #end


    

    #params[:payment_method_card_number]
    #params[:payment_method_expiry_month]
    #params[:payment_method_expiry_year]
    #params[:payment_method_security_code]

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

 

    #create customer for guest
    #create user profile

    #params = [
    #    source: [
    #      object: "customer",
    #      #number: "4111111111111111",
    #      customer_id: "cus_BJyLo6fCtMZCOT",
          #exp_month: 10,
          #exp_year: 2020,
          #country: "US",
          #name: "Ducky Test",
          #cvc: 123
    #    ],
    #    description: "Sconely order id for customer id"
    #]
  
    #IO.inspect(Stripe.Charges.create(51, params))

    #Stripe::Token.create(
    #  :card => {
    #    :number => "4242424242424242",
    #    :exp_month => 9,
    #    :exp_year => 2018,
    #    :cvc => "314"
    #  },
    #)

    #IO.inspect(args[:payment_method_card_number])
    #IO.inspect(args[:cart_items])

    #cart_items = [%{"quantity": 1}, %{"quantity": 10}]

    #if order_type == "pool"
    #promo code



    #new_customer = [
    #  email: "test@test.com",
    #  description: "An Test Account",
    #  metadata: [
    #    app_order_id: "ABC123",
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

    #IO.puts("")
    #IO.puts("")

    #IO.inspect(res)

    
    #{:ok, cust} = Stripe.Customers.get "cus_BJxvRgEJZuX07K"

    #IO.inspect(cust)

    #params = [
    #  source: [
    #    object: "card",
    #    number: "4111111111111111",
    #    cvc: 123,
    #    exp_month: 12,
    #    exp_year: 2020,
    #    metadata: [
    #      test_field: "test val"
    #    ]
    #  ]
    #]

    #{:ok, card} = Stripe.Cards.create(:customer, "cus_BJyHH3jNze7e3E", params)

    #{:ok, card} = Stripe.Cards.get(:customer, "cus_BJyLo6fCtMZCOT", "card_1AxKOMH6MNtZcTO4Q73576gH")

    #IO.inspect(card)

    #params = [
    #    source: [
    #      "object": "card", 
    #      "card": "card_1AxKOMH6MNtZcTO4Q73576gH", 
    #      "exp_month": 10,
    #      "exp_year": 2020,
    #      "country": "US",
    #      "name": "Ducky Test",
    #      "cvc": 123
    #    ],
    #    description: "Sconely order id for customer id"
    #]

    #{:ok, charge} = Stripe.Charges.create(51, params)

    #IO.inspect(charge)

    #params = [
    #      card: card.id
    #]

    #token_params = [
    #      card: [id: "card_1AxKOMH6MNtZcTO4Q73576gH"]
    #]

    #{:ok, token} = Stripe.Tokens.create token_params
    #IO.inspect(token)

    #params = [
        #source: "tok_1AxKt9H6MNtZcTO4L1zgILPc",
    #    customer:  "cus_BJyLo6fCtMZCOT",
    #    card: "card_1AxKOMH6MNtZcTO4Q73576gH",
    #    description: "Sconely order id for customer id"
    #]

    #{:ok, charge} = Stripe.Charges.create(51, params)
    #IO.inspect(charge)

    #customer = Stripy.req(:post, "customers", %{"email" => "a@b.c", "metadata[user_id]" => 1})

    #"cus_BK30g9Fg4KNza3"

    

    #IO.inspect(Stripe.Charge.create(amount: 1395, currency: "usd", source: "cus_BK3lQMlABIOi2V", description: "Fuzzy eyeglasses"))

    #IO.inspect(Stripe.Charge.create(amount: 1000, currency: "usd", customer: "cus_BK3lQMlABIOi2V"))


    

    #IO.inspect(source)

    #case source do

    #  {:ok, source} -> IO.inspect(source)
    #  {:error, error} -> IO.inspect(error)

    #end


    #if save_for_later then create customer and add payment
    #if not then just run as basic charge







  end

end