defmodule Sconely.DBTest do
  use SconeHomeElixir.ConnCase
  #sconehomeelixir.integrationtest
  alias Sconely.SconelySocialOrder
  alias SconeHomeElixir.Repo

  #@opts SconeHomeElixir.Router.init([])

  test "insert sconely social order" do
    order = %SconelySocialOrder{}

    #Repo.insert(order)

    #assert length(Repo.all) == 1

  end

  
end
