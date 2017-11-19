defmodule Sconely.EnvonmentConfigTest do
  use SconeHomeElixir.ConnCase

  #@opts SconeHomeElixir.Router.init([])

  test "prod" do

    IO.puts("mix_env")
    IO.inspect(System.get_env("MIX_ENV"))

    assert System.get_env("MIX_ENV") == "prod"

    #assert conn.state == :sent
    #assert conn.status == 200
    #assert String.contains?(conn.resp_body, "Hello Phoenix!")

  end

end
