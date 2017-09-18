defmodule Sconely.Plugs.RedirectsPlug do
  import Plug.Conn

  def init(options) do
    options
  end

  def call(conn, options) do
    #to = options[full_path(conn)]
    #to = "/page"
    #IO.puts("redirect plug")
    #do_redirect(conn, to)
    IO.inspect(conn)
    IO.inspect(get_req_header(conn, "host") |> List.first)
    #IO.inspect(get_req_header(conn, "request_path") |> List.first)
    
    #if Map.has_key?(conn.params, "pool_name") && Map.has_key?(conn.params, "pool_date") do

    #    IO.puts("pool")

    #end

    #def changeset(model, params \\ :empty)

    #def changeset(model, %{"username" => _} = params) do
      # username field is in params
    #end

    #def changeset(model, params) do
      # username is not in params
    #end

    case conn.params do

        %{"signature_event_name" => signature_event_name} -> 
                IO.puts("pattern matching")

        %{"pool_name" => pool_name, "pool_date" => pool_date} ->
                IO.puts("pool")
                if(pool_name == "image") do
                  conn
                  #|> Phoenix.Controller.redirect(to: url)
                  |> halt
                else
                  url = "/#/pool/" <> pool_name <> "/" <> pool_date
                  IO.puts(url)
                  #url = url <> "/"
                  #redirect conn, to: url
                  conn
                    |> Phoenix.Controller.redirect(to: url)
                    |> halt
                end

        _ -> conn

    end

    if Map.has_key?(conn.params, "signature_event_name") do

        IO.puts("signature")

    end

    if get_req_header(conn, "request_path") == "/yours/menu" do

        IO.puts("yours")

    end
    
    conn
  end

  defp do_redirect(conn, nil), do: conn

  defp do_redirect(conn, to) do
    #IO.puts("redirect plug")
    conn
      |> Phoenix.Controller.redirect(to: "page")
      |> halt
  end
end