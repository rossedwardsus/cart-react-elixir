defmodule Sconely.GuestListDownloadController do
  use SconeHomeElixir.Web, :controller

  #plug :put_layout, "user_order_guest.html"

  def index(conn, _params) do
    #render conn, "user_order_guest_choose_item.html"
    conn
    |> put_resp_content_type("text/csv")
    |> put_resp_header("content-disposition", "attachment; filename=\"A Real CSV.csv\"")
    |> send_resp(200, csv_content)
  end

  defp csv_content do
    csv_content = [['Ross Edwards', 'Ruby Q'],['Julie Friedman', 'SavvyGoGo']]
    |> CSV.encode
    |> Enum.to_list
    |> to_string
  end

  def create(conn, %{"photo" => user_params}) do
    text conn, user_params.path
  	#render conn, "create.html"
  end
end
