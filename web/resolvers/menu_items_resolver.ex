defmodule Sconely.MenuItemsResolver do
  #alias Sconely.SconelySignatureOrder
  use Timex
  
  def getMenuItems(_args, _info) do
    IO.puts("create graphql")

    IO.inspect(Timex.parse("2016-02-29", "{YYYY}-{0M}-{D}"))

    date1 = Timex.today()
    #date2 = Date.from({{1970, 2, 4}, {12, 5, 5}})
    #date2 = Timex.shift(date1, days: 3)
    date2 = Timex.shift(date1, days: 3)

    #date1 = Timex.date({2014, 3, 4})
    #date2 = Timex.date({2015, 3, 4})

    IO.inspect(Timex.diff(date2, date1, :days))

    #Duration.now

    
    #{:ok, Blog.Repo.all(Post)}
    {:ok, [%{item_id: 1000}]}
  end


  def create(args, _info) do
  	IO.puts("create graphql")
	  #%SconelySignatureOrder{}
	  #|> SconelySignatureOrder.changeset(args)
	  #|> Blog.Repo.insert
	  {:ok, %{order_id: 1}}
  end
end