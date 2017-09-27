use Mix.Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :scone_home_elixir, SconeHomeElixir.Endpoint,
  http: [port: 4001],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn

# Configure your database
#config :scone_home_elixir, SconeHomeElixir.Repo,
#  adapter: Ecto.Adapters.Postgres,
#  username: "postgres",
#  password: "postgres",
#  database: "scone_home_elixir_test",
#  hostname: "localhost",
#  pool: Ecto.Adapters.SQL.Sandbox



#database-local
config :scone_home_elixir, SconeHomeElixir.Repo,
  adapter: Ecto.Adapters.Postgres,
  #url: "postgres://postgres@localhost/sconely_dev"
  #url: "postgres://zokuppiwdnddjg:C8ipdqtvZ2vB8et-xPDVot87ij@ec2-54-163-240-101.compute-1.amazonaws.com:5432/d72tdu152l44hp"
  #url: "postgres://rqzuituwviprbp:d7b644fdd03e377a1ca7318849c4a631242b78496bd0d6f87847aad3ab46316d@ec2-54-83-205-71.compute-1.amazonaws.com:5432/d68qdnh6v3kbvs"

  #heroku
  url: "postgres://astyunkagqyjlt:6971339b540d713daaf77b6875476354ad6185131bc9cafa6667795437216185@ec2-107-20-186-238.compute-1.amazonaws.com:5432/dp60dnefin9ht",
  ssl: true


config :stripe, :secret_key, "sk_test_ClIoWCLD5awvN9uqiZIqzI78"
#config :stripe, :secret_key, "sk_live_V4rKgMKdlpl3CwUHHMLH0h1K"
