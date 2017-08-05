defmodule SconeHomeElixir.Web.Context do
  @behaviour Plug
 
  import Plug.Conn
 
  def init(opts), do: opts
 
  def call(conn, _) do
    #case Guardian.Plug.current_resource(conn) do
    #  nil -> 
        #IO.inspect("conn")
        #IO.inspect(conn)
        #IO.inspect(get_req_header(conn, "authorization"))
        #if nil then just add to database
        #or login

        #might be a bad call though

        #{:ok, context} ->
        #put_private(conn, :absinthe, %{context: context})
        #{:error, reason} ->
          conn
        #|> send_resp(403, reason)
        #|> halt()
        #_ ->
        #  conn
        #  |> send_resp(400, "Bad Request")
        #  |> halt()
        

        #look up token in session database
        #get as User schema and pass to resolver
        #if authorization is empty then but regiesteration
        #register user

        conn
    #  user ->
    #    IO.inspect(Guardian.Plug.current_resource(conn))
    #    IO.puts("got it")
    #    put_private(conn, :absinthe, %{context: %{current_user: user}})
    #end
  end
end