defmodule SconeHomeElixir.MpbileViewTest do
  use SconeHomeElixir.ConnCase, async: true

  import Phoenix.View

  test "mobile html" do
    assert render_to_string(SconeHomeElixir.MobileView, "mobile.html", []) == ""
  end
end
