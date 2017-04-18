defmodule SconeHomeElixir.Plugs.Redirect.RedirectsPlug do
  import Plug.Conn
  use SconeHomeElixir.Web, :controller

  #plug :do_redirect, %{my_option: "hello"}

  def init(options), do: options

  def call(conn, _) do
    #to = options[full_path(conn)]
    #to = "/page"
    IO.puts("redirect plug")
    #do_redirect(conn, to)

    #index(conn)

    #conn |> do_redirect
    conn
      #|> put_resp_cookie("first_cookie_key", "first_cookie_value")
      #|> cookies["test"]
      #|> Phoenix.Controller.redirect(to: "/user1")
      #|> put_session(:message, "new stuff we just set in the session")
      #|> get_session(:message)

    #conn.cookies["first_cookie_key"]

    #IO.puts("hello" <> get_session(:message))


  end

  defp index(conn, _params) do
    #conn = put_session(conn, :message, "new stuff we just set in the session")
    message = get_session(conn, :message)
    IO.puts("message" + message)

    #text conn, message
  end

  #defp do_redirect(conn, nil), do: conn

  defp do_redirect(conn) do

    #conn
    #|> send_resp(200, "hello")

    #|> IO.puts("redirect plug")
    #conn
    #|> Phoenix.Controller.redirect(to: "/user1")
    #  |> halt
  end
end