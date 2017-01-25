defmodule SconeHomeElixir.PageControllerTest do
  use SconeHomeElixir.ConnCase

  #@opts SconeHomeElixir.Router.init([])

  test "GET /" do
    conn = get conn(), "/mobile"
    #assert html_response(conn, 200) =~ "1"

    #conn = conn(:get, "/mobile")

    # Invoke the plug
    #conn = SconeHomeElixir.Router.call(conn, @opts)

    # Assert the response and status
    #assert conn.state == :sent
    #assert conn.status == 200
    assert String.contains?(conn.resp_body, "Hello Phoenix!")

  end

  test "GET /mobile/menu" do
    conn = get conn(), "/mobile/menu"
    #assert html_response(conn, 200) =~ "1"

    #conn = conn(:get, "/mobile")

    # Invoke the plug
    #conn = SconeHomeElixir.Router.call(conn, @opts)

    # Assert the response and status
    #assert conn.state == :sent
    #assert conn.status == 200
    assert String.contains?(conn.resp_body, "Hello Phoenix!")

  end

  test "GET /mobile/user" do
    conn = get conn(), "/mobile/user"
    #assert html_response(conn, 200) =~ "1"

    #conn = conn(:get, "/mobile")

    # Invoke the plug
    #conn = SconeHomeElixir.Router.call(conn, @opts)

    # Assert the response and status
    #assert conn.state == :sent
    #assert conn.status == 200
    assert String.contains?(conn.resp_body, "Hello Phoenix!")

  end


end
