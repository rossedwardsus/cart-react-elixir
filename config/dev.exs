use Mix.Config

# For development, we disable any cache and enable
# debugging and code reloading.
#
# The watchers configuration can be used to run external
# watchers to your application. For example, we use it
# with brunch.io to recompile .js and .css sources.
config :scone_home_elixir, SconeHomeElixir.Endpoint,
  http: [port: 4000],
  debug_errors: true,
  code_reloader: true,
  cache_static_lookup: false,
  check_origin: false
  #watchers: [node: ["node_modules/brunch/bin/brunch", "watch", "--stdin"]]

# Watch static and templates for browser reloading.
config :scone_home_elixir, SconeHomeElixir.Endpoint,
  live_reload: [
    patterns: [
      #~r{priv/static/.*(js|css|png|jpeg|jpg|gif|svg)$},
      #~r{web/views/.*(ex)$},
      #~r{web/templates/.*(eex)$}
    ]
  ]

# Do not include metadata nor timestamps in development logs
#config :logger, :console, format: "[$level] $message\n"

# Set a higher stacktrace during development.
# Do not configure such in production as keeping
# and calculating stacktraces is usually expensive.
#config :phoenix, :stacktrace_depth, 20

# Configure your database
#config :scone_home_elixir, SconeHomeElixir.Repo,
#  adapter: Ecto.Adapters.Postgres,
#  url: "postgres://postgres@localhost/sconely_dev"

#config :stripity_stripe, secret_key: "sk_test_Bmak0PLr7NSsKLjZeFvRPptz"
#config :stripity_stripe, platform_client_id: "pk_test_pY3YMi18Gcw0iUB3BSfmPtpb"


#database-local
config :scone_home_elixir, SconeHomeElixir.Repo,
  adapter: Ecto.Adapters.Postgres,
  url: "postgres://postgres@localhost/sconely_dev"
  #url: "postgres://zokuppiwdnddjg:C8ipdqtvZ2vB8et-xPDVot87ij@ec2-54-163-240-101.compute-1.amazonaws.com:5432/d72tdu152l44hp"
  #url: "postgres://rqzuituwviprbp:d7b644fdd03e377a1ca7318849c4a631242b78496bd0d6f87847aad3ab46316d@ec2-54-83-205-71.compute-1.amazonaws.com:5432/d68qdnh6v3kbvs"

  #heroku-sconely-test
  #url: "postgres://astyunkagqyjlt:6971339b540d713daaf77b6875476354ad6185131bc9cafa6667795437216185@ec2-107-20-186-238.compute-1.amazonaws.com:5432/dp60dnefin9ht",
  #ssl: true

  #heroku-sconely-prod
  #url: "postgres://tisbfgptmbcsua:021ce0c0c137bd1f8d3e08749daedaa59845b9bc4bf5825cae9f3ac11178b720@ec2-184-73-189-221.compute-1.amazonaws.com:5432/d3n1ikvdskts5t"
  #ssl: true


config :stripe, :secret_key, "sk_test_ClIoWCLD5awvN9uqiZIqzI78"
#config :stripe, :secret_key, "sk_live_V4rKgMKdlpl3CwUHHMLH0h1K"
