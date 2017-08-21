defmodule Sconely.GraphqlControllerTest do
  use SconeHomeElixir.ConnCase

  #@opts SconeHomeElixir.Router.init([])

  test "GET /" do
    #conn = get conn(), "/mobile"
    #assert html_response(conn, 200) =~ "1"

    #conn = conn(:get, "/mobile")

    # Invoke the plug
    #conn = SconeHomeElixir.Router.call(conn, @opts)

    # Assert the response and status
    #assert conn.state == :sent
    #assert conn.status == 200
    #assert String.contains?(conn.resp_body, "Hello Phoenix!")

  end

  test "GET /mobile/menu" do
    #conn = get conn(), "/mobile/menu"
    #assert html_response(conn, 200) =~ "1"

    #conn = conn(:get, "/mobile")

    # Invoke the plug
    #conn = SconeHomeElixir.Router.call(conn, @opts)

    # Assert the response and status
    #assert conn.state == :sent
    #assert conn.status == 200
    #assert String.contains?(conn.resp_body, "Hello Phoenix!")

  end

  test "get" do
    conn = get build_conn(), "/mobile/user"
    #assert html_response(conn, 200) =~ "1"

    
    # Invoke the plug
    #conn = SconeHomeElixir.Router.call(conn, @opts)

    # Assert the response and status
    #assert conn.state == :sent
    #assert conn.status == 200
    #assert String.contains?(conn.resp_body, "Hello Phoenix!")

  end

  test "graphql complete_sconely_social_order" do
    #conn =
    #  build_conn
    #  |> post("/graphql", email: "alice@example.com")

    #body = conn |> response(201) |> Poison.decode!

    #assert body["id"] > 0
    #assert body["email"] == "alice@example.com"

    #conn = conn(:post, "/graphql", \query: {mutation: complete_order(){}}}\")
    #query: mutation {complete_sconely_social_order (first: "' + this.props.order.name.first + '", last: "' + this.props.order.name.last + '", contact_email: "' + this.props.order.contact.phone + '", contact_phone: "' + this.props.order.contact.phone + '", date: "' + this.props.order.datetime.date + '", time: "' + this.props.order.datetime.time + '", street1: "' + this.props.order.delivery_address.street1 + '", street2: "' + this.props.order.delivery_address.street2 + '", city: "' + this.props.order.delivery_address.city + '", state: "' + this.props.order.delivery_address.state + '", zipcode: "' + this.props.order.delivery_address.zipcode + '", name_on_card: "' + this.props.order.payment_method.name_on_card + '", expiry_date: "' + this.props.order.payment_method.expiry_date + '", security_code: "' + this.props.order.payment_method.security_code + '", zipcode: "' + this.props.order.payment_method.security_code + '", cart_items: [{item_id: "9"}]) {order_id}}'


    queryDoc = %{
     "query" => "mutation {complete_sconely_social_order (id: 0) { email }} ",
     }

    conn = build_conn
      #|> put_req_header("authorization", "Bearer")
      |> Map.put(:host, "localhost:4000")
      #|> Map.put(:body_params, queryDoc)
      #|> post("/graphql", queryDoc)

    #body = conn |> response(201) |> IO.inspect

    #assert conn.state == :sent
    #assert conn.status == 200
    #assert String.contains?(conn.resp_body, "hey@you.com")


  end

  test "graphql login" do
    #conn =
    #  build_conn
    #  |> post("/graphql", email: "alice@example.com")

    #body = conn |> response(201) |> Poison.decode!

    #assert body["id"] > 0
    #assert body["email"] == "alice@example.com"

    #conn = conn(:post, "/graphql", \query: {mutation: complete_order(){}}}\")
    #query: mutation {complete_sconely_social_order (first: "' + this.props.order.name.first + '", last: "' + this.props.order.name.last + '", contact_email: "' + this.props.order.contact.phone + '", contact_phone: "' + this.props.order.contact.phone + '", date: "' + this.props.order.datetime.date + '", time: "' + this.props.order.datetime.time + '", street1: "' + this.props.order.delivery_address.street1 + '", street2: "' + this.props.order.delivery_address.street2 + '", city: "' + this.props.order.delivery_address.city + '", state: "' + this.props.order.delivery_address.state + '", zipcode: "' + this.props.order.delivery_address.zipcode + '", name_on_card: "' + this.props.order.payment_method.name_on_card + '", expiry_date: "' + this.props.order.payment_method.expiry_date + '", security_code: "' + this.props.order.payment_method.security_code + '", zipcode: "' + this.props.order.payment_method.security_code + '", cart_items: [{item_id: "9"}]) {order_id}}'


    queryDoc = %{
     "query" => "query {login (id: 0) { email }} ",
     }

    conn = build_conn
      #|> put_req_header("authorization", "Bearer")
      |> Map.put(:host, "localhost:4000")
      #|> Map.put(:body_params, queryDoc)
      #|> post("/graphql", queryDoc)

    #body = conn |> response(201) |> IO.inspect

    #assert conn.state == :sent
    #assert conn.status == 200
    #assert String.contains?(conn.resp_body, "hey@you.com")


  end

  test "graphql register" do
    #conn =
    #  build_conn
    #  |> post("/graphql", email: "alice@example.com")

    #body = conn |> response(201) |> Poison.decode!

    #assert body["id"] > 0
    #assert body["email"] == "alice@example.com"

    #conn = conn(:post, "/graphql", \query: {mutation: complete_order(){}}}\")
    #query: mutation {complete_sconely_social_order (first: "' + this.props.order.name.first + '", last: "' + this.props.order.name.last + '", contact_email: "' + this.props.order.contact.phone + '", contact_phone: "' + this.props.order.contact.phone + '", date: "' + this.props.order.datetime.date + '", time: "' + this.props.order.datetime.time + '", street1: "' + this.props.order.delivery_address.street1 + '", street2: "' + this.props.order.delivery_address.street2 + '", city: "' + this.props.order.delivery_address.city + '", state: "' + this.props.order.delivery_address.state + '", zipcode: "' + this.props.order.delivery_address.zipcode + '", name_on_card: "' + this.props.order.payment_method.name_on_card + '", expiry_date: "' + this.props.order.payment_method.expiry_date + '", security_code: "' + this.props.order.payment_method.security_code + '", zipcode: "' + this.props.order.payment_method.security_code + '", cart_items: [{item_id: "9"}]) {order_id}}'


    queryDoc = %{
     "query" => "mutation {create_user (id: 0) { email }} ",
     }

    conn = build_conn
      #|> put_req_header("authorization", "Bearer")
      |> Map.put(:host, "localhost:4000")
      #|> Map.put(:body_params, queryDoc)
      #|> post("/graphql", queryDoc)

    #body = conn |> response(200) |> Poison.decode!

    #assert conn.state == :sent
    #assert conn.status == 200
    #assert String.contains?(conn.resp_body, "success")


  end

end
