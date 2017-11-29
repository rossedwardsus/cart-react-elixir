defmodule Sconely.ProcessOrderDateTime do
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


  def format_order_datetime(datetime) do


      #{:ok, date} = Ecto.Date.dump(pool_order.delivery_date)
      #{:ok, date_from_erl} = Date.from_erl(date)    

      #IO.inspect(Date.day_of_week(date_from_erl))           

  end
                

  def format_order_datetime(datetime) do

    #day_as_word <> am_pm <> st_rd_th_nd <> timezone

  end

  def am_pm(hour) do

      #case hour do
      #   < 12
      #   == 12
      #   > 12

      cond do
          hour < 12 -> Integer.to_string(hour) <> " am"


      # if order_datetime_converted.hour == 12 do
      #    converted_hour = order_datetime_converted.hour
      #    am_pm = "am"
      
          hour == 12 -> Integer.to_string(hour)

          hour > 12 -> Integer.to_string(hour) <> " pm"
      end

      #use converted year month day as well

  end

  def st_nd_rd_th(day) do

      case day do
        n when n in [1, 21, 31] -> Integer.to_string(day) <> "st"
        n when n in [2, 22] -> Integer.to_string(day) <> "nd"
        n when n in [3, 23] -> Integer.to_string(day) <> "rd"
        n when n in [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 24, 25, 26, 27, 28, 29, 30] -> Integer.to_string(day) <> "th"
      end

  end

  def convert_timezone(datetime_utc) do

      #order_datetime = Ecto.DateTime.utc

      timezone = Timezone.get("America/Los_Angeles", Timex.now)

      #IO.inspect(order_datetime |> Ecto.DateTime.to_erl |> NaiveDateTime.from_erl! |> DateTime.from_naive!("Etc/UTC"))

      order_datetime_converted = Timezone.convert(datetime_utc |> Ecto.DateTime.to_erl |> NaiveDateTime.from_erl! |> DateTime.from_naive!("Etc/UTC"), timezone)


  end

  def week_day_as_word(week_day_as_number) do

    #case Date.day_of_week(date_from_erl) do
      #case Timex.weekday do
      case week_day_as_number do
        1 -> "Monday"
        2 -> "Tuesday"
        3 -> "Wednesday"
        4 -> "Thursday"
        5 -> "Friday"
        6 -> "Saturday"
        7 -> "Sunday"
      end     
  end


  #case Date.day_of_week(order_datetime_converted) do
    #case Date.day_of_week(Ecto.DateTime.to_erl(order_datetime) |> NaiveDateTime.from_erl! |> NaiveDateTime.to_date) do
    #case Date.day_of_week(Ecto.DateTime.to_date(order_datetime)) do
    #case Timex.weekday(order_datetime_converted) do
    #  1 -> {order_date_day_of_week = "Monday"}
    #  2 -> {order_date_day_of_week = "Tuesday"}
    #  3 -> {order_date_day_of_week = "Wednesday"}
    #  4 -> {order_date_day_of_week = "Thursday"}
    #  5 -> {order_date_day_of_week = "Friday"}
    #  6 -> {order_date_day_of_week = "Saturday"}
    #  7 -> {order_date_day_of_week = "Sunday"}
  #end


    #case Timex.weekday(order_datetime_converted) do
    #  0 -> {order_date_day_of_week = "Sunday"}
    #  1 -> {order_date_day_of_week = "Monday"}
    #  2 -> {order_date_day_of_week = "Tuesday"}
    #  3 -> {order_date_day_of_week = "Wednesday"}
    #  4 -> {order_date_day_of_week = "Thursday"}
    #  5 -> {order_date_day_of_week = "Friday"}
    #  6 -> {order_date_day_of_week = "Saturday"}
    #end

  def pad_minute(minute) do

    case minute do
      0 -> "00"
      1 -> "01"
      2 -> "02"
      3 -> "03"
      4 -> "04"
      5 -> "05"
      6 -> "06"
      7 -> "07"
      8 -> "08"
      9 -> "09"
      _ -> Integer.to_string(minute)
    end

  end

  def month_as_word(month_as_number) do

    case month_as_number do
      1 -> "January"
      2 -> "February"
      3 -> "March"
      4 -> "April"
      5 -> "May"
      6 -> "June"
      7 -> "July"
      8 -> "August"
      9 -> "September"
      10 -> "October"
      11 -> "November"
      12 -> "December"
    end

  end

end
