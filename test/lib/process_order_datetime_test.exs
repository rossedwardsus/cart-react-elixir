defmodule Sconely.ProcessOrderDateTimeTest do
  use SconeHomeElixir.ConnCase, async: true
  #use Plug.Test
  #alias SconeHomeElixir.Router

  use Timex

  #mix test --trace

  #@opts Router.init([])

  import Sconely.ProcessOrderDateTime

  test "format entire date and time" do

  		order_datetime = Ecto.DateTime.utc



  end


  test "am_pm 11 am" do
  	task = Task.async(Sconely.ProcessOrderDateTime, :am_pm, [11])
  	#IO.inspect(Task.await(task))

  	assert Task.await(task) == "11 am"

  	#parent = self()
	#spawn fn -> send(parent, {:am_pm(11), self()}) end
	#receive do
	#   {:hello, pid} -> "Got hello from #{inspect pid}"
	#end

  	#assert am_pm(11) == "11 am"
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
  end

end