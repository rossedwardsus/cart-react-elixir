defmodule SconeHomeElixir.Web.Context do
  @behaviour Plug
 
  import Plug.Conn
 
  def init(opts), do: opts
 
  def call(conn, _) do
    case Guardian.Plug.current_resource(conn) do
      nil -> 
        IO.inspect("conn")
        IO.inspect(Guardian.Plug.current_resource(conn))
        conn
      user ->
        IO.inspect(Guardian.Plug.current_resource(conn))
        IO.puts("got it")
        put_private(conn, :absinthe, %{context: %{current_user: user}})
    end
  end
end