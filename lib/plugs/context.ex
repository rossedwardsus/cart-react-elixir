defmodule SconeHomeElixir.Web.Context do
  @behaviour Plug
 
  import Plug.Conn

  alias Sconely.Session
 
  def init(opts), do: opts
 
  def call(conn, _) do
    #case Guardian.Plug.current_resource(conn) do
    #  nil -> 
        IO.inspect(get_req_header(conn, "authorization") |> List.first)
        #IO.inspect(conn)

        #IO.inspect(get_req_header(conn, "authorization"))

        #if get_req_header(conn, "authorization")

        #with ["bearer " <> auth_token] <- get_req_header(conn, "authorization") do

            #if no bearer toek then create one and create a session and pass the toekn to the resolver

            #

            #user_id = secure_random.uuid
            #token_id = secure_random..uuid

            session_changeset = Session.changeset(%Session{}, %{user_id: "user_id", token_id: "", logged_out_datetime: nil})
            #Repo.insert

            #Session 
            #    |> %Session{title: "Hello World"}
            #    |> %Post{} 
            #    |> changeset(%Session{}, %{user_id: "user_id", token_id: "", session_start_datetime: "", session_end_datetime: nil}
            #    |> Repo.insert!

            #post = Session
            #|> Repo.get(context[:post].id) 
            #|> Repo.preload(:comments)

            #Todo.changeset(%Todo{}, %{item: item})
            #|> Repo.insert!

            #case Repo.insert(session_changeset) do
            #  {:ok, response} -> IO.inspect(response)
                


            #else if there is one then look in the session table and pass the user id

            #Repo.one(from p in "people", select: count(p.id))
            
            #IO.inspect(String.length(get_req_header(conn, "authorization") |> List.first))

            #if there is no bearer token
            #case auth_token do
            #if String.length(auth_token) > 0 do 
            #    put_private(conn, :absinthe, %{context: %{user_id: "user_id"}})
            #else
            #    put_private(conn, :absinthe, %{context: %{user_id: "new_user"}})
            #end
        #end

            put_private(conn, :absinthe, %{context: %{user_id: "no user_id"}})
            

        #if nil then just add to database
        #or login

        #might be a bad call though

        #{:ok, context} ->


         #{:error, reason} ->
        #  conn
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

        #conn
    #  user ->
    #    IO.inspect(Guardian.Plug.current_resource(conn))
    #    IO.puts("got it")
    #    put_private(conn, :absinthe, %{context: %{current_user: user}})
    #end
  end
end