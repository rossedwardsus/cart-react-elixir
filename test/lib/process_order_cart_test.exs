defmodule Sconely.LibProcessOrderCartTest do
  use SconeHomeElixir.ConnCase, async: true
  #use Plug.Test
  #alias SconeHomeElixir.Router

  use Timex

  #mix test --trace

  #@opts Router.init([])

  import Sconely.ProcessOrderCart

  test "get_cart_with_menu_item_name_and_image_name" do

    #from menu item get name
    #take name and add mini to it
    #add menu image name
    #cost

    #map.put :name => item_name
    #map.put :menu_image_name => 

    x = for n <- [%{"1": 1}, %{"2": 2}, %{"3": 3}, %{"4": 4}] do 
        #IO.inspect(n)
        Map.merge(n, %{
          :name => "item_name",
          :menu_image_name => "image"
        })
        
    end

    IO.inspect(x)


    #[%{menu_item_id: "67890", size: "regular", quantity: 12}, %{menu_item_id: "12345", size: "mini", quantity: 12}

    #Map.merge(cart_item, %{
    #  :name => item_name,
    #  :menu_image_name => Enum.at(menu_items_mock, menu_item_index).name
    #})

    match = Enum.find([%{menu_item_id: "67890", description: "", ingredients: "", name: ""}, %{menu_item_id: "12345", description: "", ingredients: "", name: "ruby q"}], fn(element) -> element.menu_item_id == "12345"
      #match?({_, "12345"}, element)
    end)

    #IO.inspect(match.name)

    #Map.merge(cart_item, %{
    #  :name => item_name,
    #  :menu_image_name => Enum.at(menu_items_mock, menu_item_index).name
    #})
                  
  end

  test "calculate_cart_subtotal" do

    #from menu item get name
    #take name and add mini to it
    #add menu image name
    #cost

    #Enum.reduce([1, 2, 3], 0, fn(x, acc) -> x + acc end)

    #cart_items_subtotal(cart_items)

    subtotal = Enum.reduce([%{menu_item_id: "67890", size: "regular", quantity: 12}, %{menu_item_id: "12345", size: "mini", quantity: 12}], 0, fn(item, acc) -> 
      case item.size do

          "regular" -> (item.quantity * 5) + acc
          "mini" ->  (item.quantity * 2) + acc
      
      end
    
    end)

    IO.inspect(subtotal)

    #case order_type do

    #  "yours" -> 

    #    subtotal = Enum.reduce(cart_items, 0, fn(%{"quantity": quantity}, count) -> count + (quantity * 6.00) end)

    #  "pool" ->

    #    subtotal = Enum.reduce(cart_items, 0, fn(%{"quantity": quantity}, count) -> count + (quantity * 5.00) end)


    #  "social" -> 

    #    subtotal = Enum.reduce(cart_items, 0, fn(%{"quantity": quantity, "size": size}, count) -> 
    #      case size do
    #        "regular" ->  IO.puts("regular")
    #                  #quantity * 12 * 5.00
    #                  count + (quantity * 5.00)
    #        "mini" -> IO.puts("mini")
    #                #quantity * 24 * 2.25
    #                count + (quantity * 2.25)
    #      end
    #    end) 

    #end

    #Map.merge(cart_item, %{
    #  :name => item_name,
    #  :menu_image_name => Enum.at(menu_items_mock, menu_item_index).name
    #})
                  
  end

  test "format cost" do

    total_formatted = :erlang.float_to_binary(1000, [decimals: 2])

  end

  test "promo code discount" do

    IO.inspect(promo_code_discount("SCONELY 10"))

    #assert promo_code_discount("SCONELY10") == {"10%", 10}

  end

  test "promo code discount amount" do

    #IO.inspect(promo_code_amount("SCONELY10"))

    #assert promo_code_amount("SCONELY10") == 10

  end

 
  #timezone
  #
  test "get cart item name" do
  	order_datetime = Ecto.DateTime.utc

  	timezone = Timezone.get("America/Los_Angeles", Timex.now)

    #IO.inspect(order_datetime |> Ecto.DateTime.to_erl |> NaiveDateTime.from_erl! |> DateTime.from_naive!("Etc/UTC"))

    order_datetime_converted = Timezone.convert(order_datetime |> Ecto.DateTime.to_erl |> NaiveDateTime.from_erl! |> DateTime.from_naive!("Etc/UTC"), timezone)


  	#assert order_datetime_convert_timezone(order_datetime) = order_datetime_converted
  end

end