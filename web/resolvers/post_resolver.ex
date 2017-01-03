defmodule SconeHomeElixir.PostResolver do
  alias Sconely.SconelySignatureOrder
  
  def all(_args, _info) do
    #{:ok, Blog.Repo.all(Post)}
    {:ok, [%{id: 1, title: "hello", body: "there"}]}
  end


  def create(args, _info) do
	  %SconelySocialOrder{}
	  |> SconelySocialOrder.changeset(args)
	  #|> Blog.Repo.insert
  end
end