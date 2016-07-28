defmodule SconeHomeElixir.RegisterView do
  use SconeHomeElixir.Web, :view

  @attributes ~W(email)

  def render("index.json", %{logins: logins}) do

  	#for comment <- comments do

  	#render("index.json", logins: %{
  	#	email: logins.email
  	#})

  	#Enum.into(logins, %{})

  	%{logins: logins}

  	#for n <- [1, 2, 3, 4], do: n * n #push n to map %{:email, n}


  	#|> Map.take(@attributes)
  	#|> Map.update!(:email, &String.capitalize)

  	#Enum.map(logins.rows, fn row -> 
    #  Enum.zip(logins.columns, Tuple.to_list(row))
    #    |> Enum.into(%{})
    #    |> JSON.encode
    #end)

  	#%{email: logins.email} |> Poison.Encoder.encode([])


  	#for login <- logins do
     # render("index.json", logins: login)
    #end

    #logins_map = Enum.map(fn(logins) -> 
    #  %{filename: logins} # Map
    #end)

    #render("index.json", logins: logins)


  end
end
