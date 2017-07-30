defmodule Sconely.GuestListDownloadController do
  use SconeHomeElixir.Web, :controller
  alias Sconely.SignatureOrderGuestResponse

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
  	responses = Repo.all from gr in SignatureOrderGuestResponse,
              where: gr.parent_order_id == "1234",
              #select: [oda.street1, oda.street2]
              #select: map(oda, [:street1, :street2])
              select: [gr.first_name, gr.last_name]

    #responses = Repo.all(SignatureOrderGuestResponse)

    Enum.each(responses, fn(response) -> 

    	first_name_length = String.length(Enum.at(response, 0))

    	#IO.inspect(first_name_length)

    	IO.inspect("hello" <> for x <- Range.new(0, (5 - first_name_length)), do: " " <> "hello")


    end)

    #IO.inspect(responses)


    #csv_content = [['Ross Edwards', 'Ruby Q'],['Julie Friedman', 'SavvyGoGo']]
    #|> CSV.encode
    #|> Enum.to_list
    #|> to_string
  end

  def create(conn, %{"photo" => user_params}) do
    text conn, user_params.path
  	#render conn, "create.html"
  end
end
