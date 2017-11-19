defmodule Sconely.ProcessOrderDatetimeTest do
  use SconeHomeElixir.ConnCase, async: true
  #use Plug.Test
  #alias SconeHomeElixir.Router

  #@opts Router.init([])

  import Sconely.ProcessOrder

  test "am_pm 11 am" do
  	 assert am_pm(11) == "11 am"
  #  assert [2,4,6] = pmap([1,2,3], fn x -> x * 2 end)
  end

  test "st_nd_rd_th" do
  	 assert st_nd_rd_th(1) == "1st"
  end

  test "pad minute" do
  	 assert pad_minute(1) == "01"
  end

  test "day as word" do
  	 assert day_as_word(1) == "Monday"
  end

  test "month as word" do
  	 assert month_as_word(1) == "January"
  end

  #timezone
  #
  test "order datetime convert timezone" do
  	order_datetime = Ecto.DateTime.utc

  	timezone = Timezone.get("America/Los_Angeles", Timex.now)

    #IO.inspect(order_datetime |> Ecto.DateTime.to_erl |> NaiveDateTime.from_erl! |> DateTime.from_naive!("Etc/UTC"))

    order_datetime_converted = Timezone.convert(order_datetime |> Ecto.DateTime.to_erl |> NaiveDateTime.from_erl! |> DateTime.from_naive!("Etc/UTC"), timezone)


  	#assert order_datetime_convert_timezone(order_datetime) = order_datetime_converted
  #

end