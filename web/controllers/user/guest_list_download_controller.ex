defmodule Sconely.GuestListDownloadController do
  use SconeHomeElixir.Web, :controller
  alias Sconely.SignatureOrderGuestResponse
  alias Sconely.MenuItem

  #plug :put_layout, "user_order_guest.html"

  def index(conn, _params) do
    #render conn, "user_order_guest_choose_item.html"
    conn
    |> put_resp_content_type("text/csv")
    |> put_resp_header("content-disposition", "attachment; filename=\"A Real CSV.csv\"")
    |> send_resp(200, csv_content)
  end

  


  #for x <- 0..10, do: IO.puts x
  #Enum.each(0..10, &(IO.puts(&1)))
  #String.length("")

  defp csv_content do
  	#responses = Repo.all from gr in SignatureOrderGuestResponse,
    #          where: gr.parent_order_id == "1234",
              #select: [oda.street1, oda.street2]
              #select: map(oda, [:street1, :street2])
    #          select: [gr.first_name, gr.last_name, gr.email, gr.chosen_item_id]

    responses = Repo.all from gr in SignatureOrderGuestResponse,
    		  join: mi in MenuItem,
              where: gr.parent_order_id == "1234" and gr.chosen_item_id == mi.id,
              #select: [oda.street1, oda.street2]
              #select: map(oda, [:street1, :street2])
              select: [gr.first_name, gr.last_name, gr.email, mi.name]

    #IO.inspect(responses)

    #responses = Repo.all(SignatureOrderGuestResponse)

    responses_list_temp = []

    responses_list = Enum.map(responses, fn(response) -> 

    	#menu_item = Repo.get_by!(MenuItem, %{id:  Enum.at(response, 3)})
    	#menu_item = Repo.all(from mi in MenuItem, where: mi.id == ^Enum.at(response, 3), select: [mi.name])

    	#IO.inspect(menu_item)

    	#item name
    	#first name
    	#last name
    	#email

    	first_name_length = String.length(Enum.at(response, 0))

    	#IO.inspect(first_name_length)

    	#IO.puts(Enum.to_list 1..10)

    	#range = 1..10

    	#test_string = Enum.map(range, fn(x) -> " " end)
    	#test_string1 = "1" <> test_string

		#IO.puts("1" <> Enum.map(range, fn(x) -> " " end))
		#IO.inspect(test_string1)

		list_of_empty_strings = for x <- Range.new(0, (20 - first_name_length)), do: " "
		Enum.join(list_of_empty_strings, "")

		first_name_padded = Enum.at(response, 0) <> Enum.join(list_of_empty_strings, "")
		last_name_padded = Enum.at(response, 1) <> Enum.join(list_of_empty_strings, "")
		email_padded = Enum.at(response, 2) <> Enum.join(list_of_empty_strings, "")
		menu_item_padded = Enum.at(response, 3) <> Enum.join(list_of_empty_strings, "")

		#responses_list_temp ++ [first_name_padded, last_name_padded, email_padded, menu_item_padded]

		[first_name_padded, last_name_padded, email_padded, menu_item_padded]

		#IO.inspect(responses)

    	#IO.inspect(Enum.at(response, 0) <> Enum.join(list_of_empty_strings, "") <> "hello")

    end)

    IO.inspect(responses_list)

    #csv_content = [['Ross Edwards', 'Ruby Q'],['Julie Friedman', 'SavvyGoGo']]
    |> CSV.encode
    |> Enum.to_list
    |> to_string
  end

  def create(conn, %{"photo" => user_params}) do
    text conn, user_params.path
  	#render conn, "create.html"
  end
end
