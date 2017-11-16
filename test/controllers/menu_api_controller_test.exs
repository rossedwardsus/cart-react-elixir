defmodule Sconely.HomeControllerTest1 do
  use SconeHomeElixir.ConnCase

  #@opts SconeHomeElixir.Router.init([])

  test "GET menu items by order type" do
    #conn = get build_conn(), "/mobile"
    #assert html_response(conn, 200) =~ "1"

    #conn = conn(:post, "/api/menu_items", %{order_type: "social"})

    # Invoke the plug
    #conn = SconeHomeElixir.Router.call(conn, @opts)

    # Assert the response and status
    #assert conn.state == :sent
    #assert conn.status == 200
    #assert String.contains?(conn.resp_body, "menu items!")
    #maybe test count of menu items

  end

  

end
