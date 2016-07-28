defmodule SconeHomeElixir.PageControllerTest do
  use SconeHomeElixir.ConnCase

  test "GET /" do
    conn = get conn(), "/"
    assert html_response(conn, 200) =~ "Welcome to Phoenix!"
  end
end
