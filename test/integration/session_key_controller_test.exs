defmodule Sconely.SessionKeyTest do
  use SconeHomeElixir.ConnCase

  #@opts SconeHomeElixir.Router.init([])

  #setup do

  #end


  test "stripe - successful charge" do
     #params = [
     # source: [
     #   object: "charge",
     #   number: "4111111111111111",
     #   exp_month: 10,
     #   exp_year: 2020,
     #   country: "US",
     #   name: "Ducky Test",
     #   cvc: 123,
     # ],
     # description: "1000 Widgets",
     # capture: false
    #]
    
    #case Stripe.Charges.create(1000, params) do
    #  {:ok, charge} -> 
          #assert charge[:outcome]["network_status"] == "approved_by_network"
    
    #end     

    #body = conn |> response(200) |> Poison.decode!

    #assert conn.state == :sent
    #assert conn.status == 200
    #assert String.contains?(conn.resp_body, "success")


    #{:ok, %{ok: "ok"}}

  end

  test "stripe - name on card" do
     #params = [
      #source: [
      #  object: "charge",
      #  number: "4111111111111111",
      #  exp_month: 10,
      #  exp_year: 2020,
      #  country: "US",
      #  name: "Ducky Test",
      #  cvc: 123,
      #],
      #description: "1000 Widgets",
      #capture: false
    #]
    
    #case Stripe.Charges.create(1000, params) do
    #  {:ok, charge} -> IO.inspect(charge)
    
    #end     

    #body = conn |> response(200) |> Poison.decode!

    #assert conn.state == :sent
    #assert conn.status == 200
    #assert String.contains?(conn.resp_body, "success")

    #{:ok, %{}}

  end


end
