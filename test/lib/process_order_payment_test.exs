defmodule Sconely.LibProcessOrderPaymentTest do
  use SconeHomeElixir.ConnCase, async: true
  #use Plug.Test
  #alias SconeHomeElixir.Router

  #use Timex

  #mix test --trace

  #@opts Router.init([])

  #import Sconely.ProcessOrderPayment

  test "invalid cvc" do

      #proces_payment card_number expiry_month expiry_year zipcode name_on_card cvc amount

      #cvc
      case Stripe.Token.create(%{:card => %{"number" => "4000000000000127", "exp_month" => 9, "exp_year" => 2018, "cvc" => "314", "address_zip" => "90025", "name" => "Ross Edwards"}}) do

      #luhn check
      #case Stripe.Token.create(%{:card => %{"number" => "4242424242424241", "exp_month" => 9, "exp_year" => 2018, "cvc" => "314", "address_zip" => "90025", "name" => "Ross Edwards"}}) do
      

      #load one of these depenging on whether test or live
      #env("test_prod") == test
      #working
      #case Stripe.Token.create(%{:card => %{"number" => "4000000000000077", "exp_month" => 9, "exp_year" => 2018, "cvc" => "314", "address_zip" => "90025", "name" => "Ross Edwards"}}) do

          {:ok, token} -> {:ok, token}

            IO.inspect(token["id"])  

            case Stripe.Charge.create(%{:amount => trunc(100), :currency => "usd", :source => token["id"], :description => "Charge for Sconely.com"}) do

                {:ok, charge} -> #IO.inspect(charge)
             #   stripe_charge_token = charge["id"]
                stripe_response = {:ok, charge}
              #                   {:ok, charge}
                {:error, error} -> {:error, error}
                    stripe_response = {:error, error}

            end

          {:error, error} -> {:error, error}
              stripe_response = {:error, error}

      end

      IO.inspect(stripe_response)

  end

end