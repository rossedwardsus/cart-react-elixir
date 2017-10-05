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

    IO.inspect(conn)
      
    #Assert the response and status
    #assert conn.state == :sent
    #assert conn.status == 404
    #assert hd(json_response(response, 200)["errors"])["message"]
      == "Field `email': Not present in schema"
    #assert String.contains?(conn.resp_body, "Hello Phoenix!")



    
    #res = context.conn
     #   |> post("/api/graphql", {mutation: process_yours_social_pool_order{}()}))

    #assert json_response(res, 200)["data"]["account"]["email"] == "hey@you.com"
  end



  #test "graphql complete_sconely_social_order" do
    #conn =
    #  build_conn
    #  |> post("/graphql", email: "alice@example.com")

    #body = conn |> response(201) |> Poison.decode!

    #assert body["id"] > 0
    #assert body["email"] == "alice@example.com"

    #conn = conn(:post, "/graphql", \query: {mutation: complete_order(){}}}\")
    #query: mutation {complete_sconely_social_order (first: "' + this.props.order.name.first + '", last: "' + this.props.order.name.last + '", contact_email: "' + this.props.order.contact.phone + '", contact_phone: "' + this.props.order.contact.phone + '", date: "' + this.props.order.datetime.date + '", time: "' + this.props.order.datetime.time + '", street1: "' + this.props.order.delivery_address.street1 + '", street2: "' + this.props.order.delivery_address.street2 + '", city: "' + this.props.order.delivery_address.city + '", state: "' + this.props.order.delivery_address.state + '", zipcode: "' + this.props.order.delivery_address.zipcode + '", name_on_card: "' + this.props.order.payment_method.name_on_card + '", expiry_date: "' + this.props.order.payment_method.expiry_date + '", security_code: "' + this.props.order.payment_method.security_code + '", zipcode: "' + this.props.order.payment_method.security_code + '", cart_items: [{item_id: "9"}]) {order_id}}'


    #queryDoc = %{
    # "query" => "mutation {complete_sconely_social_order (id: 0) { email }} ",
    # }

    #conn = build_conn
      #|> put_req_header("authorization", "Bearer")
    #  |> Map.put(:host, "localhost:4000")
      #|> Map.put(:body_params, queryDoc)
      #|> post("/graphql", queryDoc)

    #body = conn |> response(201) |> IO.inspect

    #assert conn.state == :sent
    #assert conn.status == 200
    #assert String.contains?(conn.resp_body, "hey@you.com")


  #end



end
