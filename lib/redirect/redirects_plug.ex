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
    #IO.inspect(conn)

    #user_agent = conn |> get_req_header("user-agent")

    user_agent = conn |> get_req_header("user-agent") |> List.first
    #ip = conn |> get_req_header("http_client_ip")
    
    #IO.inspect(user_agent |> List.first)
    
    #IO.inspect(conn.remote_ip)
    #data time
    #ipaddress
    #:inet_parse.ntoa(conn.remote_ip)


    #changeset = BrowserAnalytics.changeset(%BrowserAnalytics{}, %{data: user_agent |> List.first})
    #{:error, changeset} = Repo.insert(changeset)

    
    IO.puts("user agent")
    IO.inspect(get_req_header(conn, "user-agent"))

    {index, _} = :binary.match(user_agent, "Mac")
    #{9, 1}
    IO.inspect(index)
    
    #IO.inspect(get_req_header(conn, "host") |> List.first)
    #IO.inspect(get_req_header(conn, "request_path") |> List.first)
    #IO.inspect(conn.path_info |> List.first)
    
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

    #
    case conn.path_info |> List.first do
        nil -> IO.puts("nil")
               conn
               |> halt
        "image" -> IO.puts("image")
        "pool" -> conn
                  #|> Phoenix.Controller.redirect(to: url)
                  |> halt
        "yours" -> IO.puts("yours")
                    conn |> halt
        "order" -> IO.puts("orders")
                    conn |> halt
        "public" -> IO.puts("public")
                    conn |> halt
        "social" -> IO.puts("social")
        "user" -> IO.puts("social")
        "login" -> ""
        "register" -> ""
        _ -> IO.puts("anything else")
             # IO.inspect(Enum.at(conn.path_info, 0))
             # check if pool - Enum.at(conn.path_info, 0) - if not redirect to homepage
             url = "/pool/" <> Enum.at(conn.path_info, 0) <> "/" <> Enum.at(conn.path_info, 1)
                   #IO.puts(url)
        #          #url = url <> "/"
                   conn
                    #|> put_status(302)
                    |> Phoenix.Controller.redirect(to: url)
                    |> halt

                    #status code 302
        
    end

    #case conn.params do

        #if no paramas
        #_ -> conn
        #if one then signature order
        #check if signature order valid
        #if two
        #param1 == yours
        #or param1 == social
        #or image
        #or pool
        #check pool still valid


        #if only one param1 is not empty and param2 is not empty

        #signature event name - sconelylaunchatlaci
        #%{"signature_event_name" => signature_event_name} -> 
        #        IO.puts("pattern matching")


        #8thandhope/thursdayseptember23rd
        #pool redirect

        #if 2 params
        #else if 3 params

        #%{"pool_name" => pool_name, "pool_date" => pool_date} ->
                #IO.puts("pool")
        #        if(pool_name == "image") do
        #          conn
                  #|> Phoenix.Controller.redirect(to: url)
        #          |> halt
        #        else
        #          url = "/pool/" <> pool_name <> "/" <> pool_date
        #          IO.puts(url)
        #          #url = url <> "/"
        #          #redirect conn, to: url
        #          conn
        #            |> Phoenix.Controller.redirect(to: url)
        #            |> halt
        #        end

        #_ -> conn

    #end

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