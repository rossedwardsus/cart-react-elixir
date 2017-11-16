defmodule Sconely.GraphqlPoolOrderTest do
  use SconeHomeElixir.ConnCase

  #@opts SconeHomeElixir.Router.init([])

  setup do

    conn =
      build_conn
      |> recycle()
      #|> bypass_through(SconeHomeElixir.Router, :br)
      |> post("/api/graphql")

    {:ok, %{conn: conn}}

     #api_conn = post build_conn(), "/api/graphql", [username: "john", password: "doe"]
     #conn = SconeHomeElixir.Router.call(api_conn, @opts)

  #  {:ok, account} = AccountResolver.create(@account, %{})
  #  {:ok, token} = AccountResolver.login(@account, %{})

  #  conn = build_conn()
  #      |> put_req_header("authorization", "Bearer #{token.token}")
  #      |> put_req_header("content-type", "application/json")

  #  {:ok, %{conn: conn, id: account.id}}
  end

  defp query_skeleton(query, query_name) do
    %{
      "operationName" => "#{query_name}",
      "query" => "query #{query_name} #{query}",
      "variables" => "{}"
    }
  end

  test "get pool order details", context do
    #query = """
    #  {
    #    account (id: #{context.id}) {
    #      email
    #    }
    #  }
    #"""

    #queryDoc = %{
    # "mutation" => "{process_yours_social_pool_order () { email }} ",
    #}

    #{query: 'query {get_pool_order_details (pool_url_name: "' + pool_url_name + '", pool_url_date: "' + pool_url_date + '") {parent_order_id pool_admin_receipt_order_id pool_name pool_address pool_location pool_message}}'}, {headers: {'authorization': "bearer"}}

    query = "query {get_pool_order_details (pool_url_name: \"8thandhope\", pool_url_date: \"09-20-2017\") {email}}"

    queryDoc = %{
     #"query" => 'query {get_pool_order_details (pool_url_name: "8thandhope", pool_url_date: "09-20-2017") {parent_order_id pool_admin_receipt_order_id pool_name pool_address pool_location pool_message}}'
     query: query
    }

    response = build_conn
      #|> put_req_header("authorization", "Bearer")
      |> Map.put(:host, "localhost:4000")
      #|> Map.put(:body_params, queryDoc)
      |> post("/api/graphql", queryDoc)

    #conn = build_conn(:post, "/api/graphql", queryDoc)
    #Plug.Conn.fetch_cookies/2

    #IO.inspect(conn)
      
    #Assert the response and status
    #assert conn.state == :sent
    #assert conn.status == 404
    assert hd(json_response(response, 200)["errors"])["message"]
      == "Field `email': Not present in schema"
    #assert String.contains?(conn.resp_body, "Hello Phoenix!")



    
    #res = context.conn
     #   |> post("/api/graphql", {mutation: process_yours_social_pool_order{}()}))

    #assert json_response(res, 200)["data"]["account"]["email"] == "hey@you.com"
  end



  test "process yours order" do
    #conn =
    #  build_conn
    #  |> post("/graphql", email: "alice@example.com")


    query = "query {get_pool_order_details (pool_url_name: \"8thandhope\", pool_url_date: \"09-20-2017\") {email}}"

    queryDoc = %{
     #"query" => 'mutation {process_yours_social_pool_order_details (pool_admin_receipt_order_id: 1, user_first_name: "ross", user_last_name: "edwards", user_last_name: user_contact_email: "rossedwards@", user_contact_mobile: "123-456-7890", promo_code: "", cart_items: [{menu_item_id: 1, quantity: 100, size: "mini"}], delivery_contact_address_contact_first_name: "ross", delivery_contact_address_contact_last_name: "edwards", delivery_contact_address_contact_email: "ross@", delivery_contact_address_contact_mobile: "123-456-7890", delivery_contact_address_street1: "street", delivery_contact_address_street2: "street2", delivery_contact_address_city: "city", delivery_contact_address_state: "state", delivery_contact_address_zipcode: "zipcode") {parent_order_id pool_admin_receipt_order_id pool_name pool_address pool_location pool_message}}'
     query: query
    }

    response = build_conn
      #|> put_req_header("authorization", "Bearer")
      |> Map.put(:host, "localhost:4000")
      #|> Map.put(:body_params, queryDoc)
      |> post("/api/graphql", queryDoc)

    #conn = build_conn(:post, "/api/graphql", queryDoc)
    #Plug.Conn.fetch_cookies/2

    #IO.inspect(conn)
      
    #Assert the response and status
    #assert conn.state == :sent
    #assert conn.status == 404
    assert hd(json_response(response, 200)["errors"])["message"]
      == "Field `email': Not present in schema"
    #assert String.contains?(conn.resp_body, "Hello Phoenix!")

    #assert that the order went into the database
    #user
    #orders
    #pool order response
    #delivery 
    #payment

  end

   test "process social order" do
    #conn =
    #  build_conn
    #  |> post("/graphql", email: "alice@example.com")


    query = "query {get_pool_order_details (pool_url_name: \"8thandhope\", pool_url_date: \"09-20-2017\") {email}}"

    queryDoc = %{
     #"query" => 'mutation {process_yours_social_pool_order_details (order_type: "social", pool_admin_receipt_order_id: 1, user_first_name: "ross", user_last_name: "edwards", user_last_name: user_contact_email: "rossedwards@", user_contact_mobile: "123-456-7890", promo_code: "", cart_items: [{menu_item_id: 1, quantity: 100, size: "mini"}], delivery_contact_address_contact_first_name: "ross", delivery_contact_address_contact_last_name: "edwards", delivery_contact_address_contact_email: "ross@", delivery_contact_address_contact_mobile: "123-456-7890", delivery_contact_address_street1: "street", delivery_contact_address_street2: "street2", delivery_contact_address_city: "city", delivery_contact_address_state: "state", delivery_contact_address_zipcode: "zipcode") {parent_order_id pool_admin_receipt_order_id pool_name pool_address pool_location pool_message}}'
     query: query
    }

    response = build_conn
      #|> put_req_header("authorization", "Bearer")
      |> Map.put(:host, "localhost:4000")
      #|> Map.put(:body_params, queryDoc)
      |> post("/api/graphql", queryDoc)

    #conn = build_conn(:post, "/api/graphql", queryDoc)
    #Plug.Conn.fetch_cookies/2

    #IO.inspect(conn)
      
    #Assert the response and status
    #assert conn.state == :sent
    #assert conn.status == 404
    assert hd(json_response(response, 200)["errors"])["message"]
      == "Field `email': Not present in schema"
    #assert String.contains?(conn.resp_body, "Hello Phoenix!")

    #assert that the order went into the database
    #user
    #orders
    #pool order response
    #delivery 
    #payment

  end

   test "process pool order" do
    #conn =
    #  build_conn
    #  |> post("/graphql", email: "alice@example.com")


    query = "query {get_pool_order_details (pool_url_name: \"8thandhope\", pool_url_date: \"09-20-2017\") {email}}"

    queryDoc = %{
     #"query" => 'mutation {process_yours_social_pool_order_details (pool_admin_receipt_order_id: 1, user_first_name: "ross", user_last_name: "edwards", user_last_name: user_contact_email: "rossedwards@", user_contact_mobile: "123-456-7890", promo_code: "", cart_items: [{menu_item_id: 1, quantity: 100, size: "mini"}], delivery_contact_address_contact_first_name: "ross", delivery_contact_address_contact_last_name: "edwards", delivery_contact_address_contact_email: "ross@", delivery_contact_address_contact_mobile: "123-456-7890", delivery_contact_address_street1: "street", delivery_contact_address_street2: "street2", delivery_contact_address_city: "city", delivery_contact_address_state: "state", delivery_contact_address_zipcode: "zipcode") {parent_order_id pool_admin_receipt_order_id pool_name pool_address pool_location pool_message}}'
     query: query
    }

    response = build_conn
      #|> put_req_header("authorization", "Bearer")
      |> Map.put(:host, "localhost:4000")
      #|> Map.put(:body_params, queryDoc)
      |> post("/api/graphql", queryDoc)

    #conn = build_conn(:post, "/api/graphql", queryDoc)
    #Plug.Conn.fetch_cookies/2

    #IO.inspect(conn)
      
    #Assert the response and status
    #assert conn.state == :sent
    #assert conn.status == 404
    assert hd(json_response(response, 200)["errors"])["message"]
      == "Field `email': Not present in schema"
    #assert String.contains?(conn.resp_body, "Hello Phoenix!")

    #assert that the order went into the database
    #user
    #orders
    #pool order response
    #delivery 
    #payment

    #http posion

    #users_as_json =
    #%User{first_name: "Bob", last_name: "Dylan", email: "bob@aol.com"}
    #|> Repo.insert
    #|> List.wrap
    #|> Poison.encode!

    #response = conn(:get, "/api/users") |> send_request

    #assert response.status == 200
    #assert response.resp_body == users_as_json

  end

  test "user create pool" do
    #conn =
    #  build_conn
    #  |> post("/graphql", email: "alice@example.com")


    query = "query {get_pool_order_details (pool_url_name: \"8thandhope\", pool_url_date: \"09-20-2017\") {email}}"

    queryDoc = %{
     #"query" => 'mutation {process_yours_social_pool_order_details (pool_admin_receipt_order_id: 1, user_first_name: "ross", user_last_name: "edwards", user_last_name: user_contact_email: "rossedwards@", user_contact_mobile: "123-456-7890", promo_code: "", cart_items: [{menu_item_id: 1, quantity: 100, size: "mini"}], delivery_contact_address_contact_first_name: "ross", delivery_contact_address_contact_last_name: "edwards", delivery_contact_address_contact_email: "ross@", delivery_contact_address_contact_mobile: "123-456-7890", delivery_contact_address_street1: "street", delivery_contact_address_street2: "street2", delivery_contact_address_city: "city", delivery_contact_address_state: "state", delivery_contact_address_zipcode: "zipcode") {parent_order_id pool_admin_receipt_order_id pool_name pool_address pool_location pool_message}}'
     query: query
    }

    response = build_conn
      #|> put_req_header("authorization", "Bearer")
      |> Map.put(:host, "localhost:4000")
      #|> Map.put(:body_params, queryDoc)
      |> post("/api/graphql", queryDoc)

    #conn = build_conn(:post, "/api/graphql", queryDoc)
    #Plug.Conn.fetch_cookies/2

    #IO.inspect(conn)
      
    #Assert the response and status
    #assert conn.state == :sent
    #assert conn.status == 404
    assert hd(json_response(response, 200)["errors"])["message"]
      == "Field `email': Not present in schema"
    #assert String.contains?(conn.resp_body, "Hello Phoenix!")

    #assert that the order went into the database
    #user
    #orders
    #pool order response
    #delivery 
    #payment

    #http posion

    #users_as_json =
    #%User{first_name: "Bob", last_name: "Dylan", email: "bob@aol.com"}
    #|> Repo.insert
    #|> List.wrap
    #|> Poison.encode!

    #response = conn(:get, "/api/users") |> send_request

    #assert response.status == 200
    #assert response.resp_body == users_as_json

  end

  test "user create pool order response" do
    #conn =
    #  build_conn
    #  |> post("/graphql", email: "alice@example.com")


    query = "query {get_pool_order_details (pool_url_name: \"8thandhope\", pool_url_date: \"09-20-2017\") {email}}"

    queryDoc = %{
     #"query" => 'mutation {process_yours_social_pool_order_details (pool_admin_receipt_order_id: 1, user_first_name: "ross", user_last_name: "edwards", user_last_name: user_contact_email: "rossedwards@", user_contact_mobile: "123-456-7890", promo_code: "", cart_items: [{menu_item_id: 1, quantity: 100, size: "mini"}], delivery_contact_address_contact_first_name: "ross", delivery_contact_address_contact_last_name: "edwards", delivery_contact_address_contact_email: "ross@", delivery_contact_address_contact_mobile: "123-456-7890", delivery_contact_address_street1: "street", delivery_contact_address_street2: "street2", delivery_contact_address_city: "city", delivery_contact_address_state: "state", delivery_contact_address_zipcode: "zipcode") {parent_order_id pool_admin_receipt_order_id pool_name pool_address pool_location pool_message}}'
     query: query
    }

    response = build_conn
      #|> put_req_header("authorization", "Bearer")
      |> Map.put(:host, "localhost:4000")
      #|> Map.put(:body_params, queryDoc)
      |> post("/api/graphql", queryDoc)

    #conn = build_conn(:post, "/api/graphql", queryDoc)
    #Plug.Conn.fetch_cookies/2

    #IO.inspect(conn)

    #test successfull call
    #assert delivery date, location, time, pool full name


    #test expired pool order
    #test pool order does not exist
      
    #test payment error

    #test token exists

    #unit test insert?
    #maybe just changsets and functions at some point

    #or use contacts app
      
    #Assert the response and status
    #assert conn.state == :sent
    #assert conn.status == 404
    assert hd(json_response(response, 200)["errors"])["message"]
      == "Field `email': Not present in schema"
    #assert String.contains?(conn.resp_body, "Hello Phoenix!")

    #assert that the order went into the database
    #user
    #orders
    #pool order response
    #delivery 
    #payment

    #http posion

    #users_as_json =
    #%User{first_name: "Bob", last_name: "Dylan", email: "bob@aol.com"}
    #|> Repo.insert
    #|> List.wrap
    #|> Poison.encode!

    #response = conn(:get, "/api/users") |> send_request

    #assert response.status == 200
    #assert response.resp_body == users_as_json

  end

end
