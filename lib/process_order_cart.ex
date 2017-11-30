defmodule Sconely.ProcessOrderCart do
  #import Bamboo.Email

  alias SconeHomeElixir.Repo
  alias Sconely.SconelySignatureOrder
  alias Sconely.SconelySignatureOrderAdditionalItem
  alias Sconely.MenuItem
  alias Sconely.Registration
  alias Sconely.MailingListGuestRegistration
  alias Sconely.User
  alias Sconely.UserPaymentMethod
  alias Sconely.UserDeliveryContactAddress
  alias Sconely.Order
  alias Sconely.UserPool
  alias Sconely.PoolOrder
  alias Sconely.PoolOrderResponse
  alias Sconely.PoolOrderResponseItem
  alias Sconely.YoursSocialOrder
  alias Sconely.OrderItem
  #alias Ecto.Multi
  alias Sconely.CompleteOrderResolverHelper

  use Timex

  import Ecto.DateTime
  import Ecto.Query
  import Sconely.ProcessStripePayment

  #stripe payment
  
  #email receipts-order id
  #items
  #date time
  #contact
  #name
  #cost
  #pool order-delivery address
  #database inserts
  #get menu
  #time zone
  #format datetime

  formatted_datetime = nil
  subtotal = nil
  promo_code = nil
  promo_code_discount = nil

  #delivery address/datetim gotten from front end for social as a string
  #for pool gotten from teh database so date time is type date but time is a string

  test_cart = %{menu_item_id: 000001, quantit: 12, size: "regular"}
  #test_order_datetime = Ecto.Datetime.utc()
  test_order_datetime_formatted = nil
  test_delivery_datetime = nil
  test_args = %{first_name: "ross", last_name: "edwards", email: "", mobile: ""}


  #{:ok, date} = Ecto.Date.dump(pool_order.delivery_date)
  #{:ok, date_from_erl} = Date.from_erl(date)    

  #IO.inspect(Date.day_of_week(date_from_erl))


  #spec
  def processPayment(payment_args, amount) do

      #working
      case Stripe.Token.create(%{:card => %{"number" => "4000000000000077", "exp_month" => 9, "exp_year" => 2018, "cvc" => "314", "address_zip" => "90025", "name" => "Ross Edwards"}}) do

      #case Stripe.Token.create(%{:card => %{"name" => args[:payment_method_name_on_card], "number" => args[:payment_method_card_number], "exp_month" => args[:payment_method_expiry_month], "exp_year" => args[:payment_method_expiry_year], "cvc" => args[:payment_method_security_code], "address_zip" => args[:payment_method_zipcode]}}) do


      
      {:ok, token} -> {:ok, token}

            #token["id"]

            case Stripe.Charge.create(%{:amount => 100, :currency => "usd", :source => token["id"], :description => "Charge for Sconely.com"}) do

              {:ok, charge} -> {:ok, charge}
              {:error, error} -> {:error, error}

            end

      end

  end

  def get_menu_item_name1(datetime) do

    match = Enum.find(%{menu_item_id: "12345", description: "", ingredients: "", name: ""}, fn(element) ->
      match?({_, "12345"}, element)
    end)

    IO.inspect(match)

    #Map.merge(cart_item, %{
    #  :name => item_name,
    #  :menu_image_name => Enum.at(menu_items_mock, menu_item_index).name
    #})
                  
  end


  def get_menu_item_name(datetime) do

    #just test with one item
    menu_items_mock = %{menu_item_id: "12345", description: "", ingredients: "", name: ""}
    cart_items_mock = %{menu_item_id: "12345", size: "regular", quantity: 1}

    #get element with the menu item id using filter
    #add the menu item name to the cart item
    #also look in cart items for size == mini and 
    #also menu item image

    cart_items_with_name = Enum.map(cart_items_mock, fn(cart_item) ->
          #Map.put(cart_item, :name, "name")
          #IO.inspect(Enum.at(menu_items_mock, 0).name)
          IO.inspect(cart_item[:size])

          if cart_item[:size] == "regular" do

            menu_item_index = cart_items_mock[:menu_item_id]-1

            item_name = Enum.at(menu_items_mock, cart_items_mock[:menu_item_id]-1).name

            #Map.put(cart_item, :name, Enum.at(menu_items, menu_item_index).name)
            #Map.put(cart_item, :menu_image_name, Enum.at(menu_items, menu_item_index).name)

            Map.merge(cart_item, %{
              :name => item_name,
              :menu_image_name => Enum.at(menu_items_mock, menu_item_index).name
            })

          else

            #IO.inspect(cart_item[:menu_item_id]-1)

            #use map to find the menu_item_id instead of by index
            #also this code is mostly duplicate of above

            item_name = Enum.at(menu_items_mock, cart_items_mock[:menu_item_id]-1).name <> " mini"

            menu_item_index = cart_items_mock[:menu_item_id]-1

            #Map.put(cart_item, :name, item_name)
            #Map.put(cart_item, :menu_image_name, Enum.at(menu_items, menu_item_index).name)

            Map.merge(cart_item, %{
              :name => item_name,
              :menu_image_name => Enum.at(menu_items_mock, menu_item_index).name <> " mini"
            })

          end

          #name = Enum.filter(menu_items, fn(menu_item) ->
            #match?({:, _}, element)
            #IO.inspect(cart_item.item_id)
            #IO.inspect(menu_item.item_id)
          #  if(menu_item.item_id == cart_item.item_id) do
              #IO.puts("here")
              #IO.inspect(menu_item.name |> String.downcase |> String.replace(" ", ""))
              #IO.inspect(String.downcase(menu_item.name) |> String.replace(menu_item.name, " ", ""))
          #    Enum.at(Map.put(cart_item, :name, menu_item.name), 0)
             #menu_item

          #  end
          #end)
          #IO.inspect(String.downcase(name) |> String.replace(name, " ", ""))
          #IO.inspect(cart_item)
       #   name_temp = Enum.at(name, 0)
          #IO.inspect(title_temp[:title])
       #   Map.put(cart_item, :title, title_temp[:title])
        end)

        IO.inspect(cart_items_with_name)

    #day_as_word <> am_mp <> st_rd_th_nd <> timezone

  end

  def cartItemsSubtotal(cart_items) do

    Enum.reduce([%{menu_item_id: "67890", size: "regular", quantity: 12}, %{menu_item_id: "12345", size: "mini", quantity: 12}], 0, fn(item, acc) -> 
      case item.size do

          "regular" -> (item.quantity * 5) + acc
          "mini" ->  (item.quantity * 2) + acc
      
      end
    
    end)

  end

  def delivery_cost() do


  end

  def promoCodeDiscount(promo_code) do

      case promo_code do


          "" -> ""

          "8THANDHOPE" -> {"10%", 10}
          "GRAIN" ->  {"10%", 10}
          "SCONELY10" ->  {"10%", 10}
          "CROSSCAMPUS10" ->  {"10%", 10}
          "WEWORK10" ->  {"10%", 10}


          #%promo_code_discount

      end
       
  end

  def promo_code_amount(promo_code) do

      case promo_code do


          "" -> ""

          "8THANDHOPE" -> 10
          "GRAIN" ->  promo_code_discount = "10%"
                      #total = subtotal - (subtotal * 10/100)
          "SCONELY10" ->  promo_code_discount = "10%"
                      #total = subtotal - (subtotal * 10/100)
          "CROSSCAMPUS10" ->  promo_code_discount = "10%"
                      #total = subtotal - (subtotal * 10/100)
          "WEWORK10" ->  promo_code_discount = "10%"
                      #total = subtotal - (subtotal * 10/100)


          promo_code_discount

      end
       
  end

  def cartTotal(subtotal, discount_amount) do

    subtotal - (subtotal * discount_amount/100)

  end


  def cart_with_one_item_names() do

      menu_items = nil
      cart_items_with_names = nil

      query = from mi in MenuItem, select: %{"item_id": mi.id, "name": mi.name}
      menu_items = Repo.all(query)

      cart_items = nil


       cart_items_with_name = Enum.map(cart_items, fn(cart_item) ->
          #Map.put(cart_item, :name, "name")
          #IO.inspect(Enum.at(menu_items, 0).name)
          IO.inspect(cart_item[:size])

          if cart_item[:size] == "regular" do

            menu_item_index = cart_item[:menu_item_id]-1

            item_name = Enum.at(menu_items, cart_item[:menu_item_id]-1).name

            #Map.put(cart_item, :name, Enum.at(menu_items, menu_item_index).name)
            #Map.put(cart_item, :menu_image_name, Enum.at(menu_items, menu_item_index).name)

            Map.merge(cart_item, %{
              :name => item_name,
              :menu_image_name => Enum.at(menu_items, menu_item_index).name
            })

          else

            #IO.inspect(cart_item[:menu_item_id]-1)

            #use map to find the menu_item_id instead of by index
            #also this code is mostly duplicate of above

            item_name = Enum.at(menu_items, cart_item[:menu_item_id]-1).name <> " mini"

            menu_item_index = cart_item[:menu_item_id]-1

            #Map.put(cart_item, :name, item_name)
            #Map.put(cart_item, :menu_image_name, Enum.at(menu_items, menu_item_index).name)

            Map.merge(cart_item, %{
              :name => item_name,
              :menu_image_name => Enum.at(menu_items, menu_item_index).name
            })

          end

          #name = Enum.filter(menu_items, fn(menu_item) ->
            #match?({:, _}, element)
            #IO.inspect(cart_item.item_id)
            #IO.inspect(menu_item.item_id)
          #  if(menu_item.item_id == cart_item.item_id) do
              #IO.puts("here")
              #IO.inspect(menu_item.name |> String.downcase |> String.replace(" ", ""))
              #IO.inspect(String.downcase(menu_item.name) |> String.replace(menu_item.name, " ", ""))
          #    Enum.at(Map.put(cart_item, :name, menu_item.name), 0)
             #menu_item

          #  end
          #end)
          #IO.inspect(String.downcase(name) |> String.replace(name, " ", ""))
          #IO.inspect(cart_item)
       #   name_temp = Enum.at(name, 0)
          #IO.inspect(title_temp[:title])
       #   Map.put(cart_item, :title, title_temp[:title])
        end)

        IO.inspect(cart_items_with_name)

  end

end
