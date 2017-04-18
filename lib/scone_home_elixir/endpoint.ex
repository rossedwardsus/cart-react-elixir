defmodule SconeHomeElixir.Endpoint do
  use Phoenix.Endpoint, otp_app: :scone_home_elixir

  socket "/socket", SconeHomeElixir.UserSocket

  # Serve at "/" the static files from "priv/static" directory.
  #
  # You should set gzip to true if you are running phoenix.digest
  # when deploying your static files in production.
  plug Plug.Static,
    at: "/", from: :scone_home_elixir, gzip: false,
    #only: ~w(css fonts images js favicon.ico robots.txt)
    only: ~w()

  # Code reloading can be explicitly enabled under the
  # :code_reloader configuration of your endpoint.
  if code_reloading? do
    socket "/phoenix/live_reload/socket", Phoenix.LiveReloader.Socket
    plug Phoenix.LiveReloader
    plug Phoenix.CodeReloader
  end

  plug Plug.RequestId
  plug Plug.Logger

  plug Plug.Parsers,
    parsers: [:urlencoded, :multipart, :json],
    pass: ["*/*"],
    json_decoder: Poison,
    length: 100_000_000

  plug Plug.MethodOverride
  plug Plug.Head

  plug Plug.Session,
    store: :cookie,
    key: "_scone_home_elixir_key",
    signing_salt: "GSBcXlGw"

  #plug SconeHomeElixir.Plugs.Redirect.RedirectsPlug

  plug SconeHomeElixir.Router

end
