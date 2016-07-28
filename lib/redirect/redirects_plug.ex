defmodule SconeHomeElixir.RedirectsPlug do
  import Plug.Conn

  def init(options) do
    options
  end

  def call(conn, options) do
    #to = options[full_path(conn)]
    to = "/page"
    #IO.puts("redirect plug")
    do_redirect(conn, to)
  end

  defp do_redirect(conn, nil), do: conn

  defp do_redirect(conn, to) do
    #IO.puts("redirect plug")
    conn
      |> Phoenix.Controller.redirect(to: "page")
      |> halt
  end
end