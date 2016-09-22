# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# Configures the endpoint
config :scone_home_elixir, SconeHomeElixir.Endpoint,
  url: [host: "localhost"],
  root: Path.dirname(__DIR__),
  secret_key_base: "Cygj7vmAvM7wafuEC0VmCURBGy97Ba6LYFKL/5wQZxAJw02GiXIUlxoDGfUEsOuD",
  render_errors: [accepts: ~w(html json)],
  pubsub: [name: SconeHomeElixir.PubSub,
           adapter: Phoenix.PubSub.PG2]

config :scone_home_elixir, SconeHomeElixir.Repo,
  adapter: Ecto.Adapters.Postgres,
  #database: "scone_home",
  #username: "postgres",
  #password: "",
  #hostname: "localhost"
  url: "postgres://postgres@localhost/scone_home"

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
import_config "config.secret.exs"

# Configure phoenix generators
config :phoenix, :generators,
  migration: true,
  binary_id: false


config :scone_home_elixir, SconeHomeElixir.Mailer,
  adapter: Bamboo.MailgunAdapter,
  #api_key: "my_api_key"
  api_key: "key-22e98444fc043c1e72943865de283d39",
  domain: "sandbox60cd8c923f214e8b90257138647a028e.mailgun.org"


config :scone_home_elixir, mailgun_domain: "sandbox60cd8c923f214e8b90257138647a028e.mailgun.org",
                mailgun_key: "key-22e98444fc043c1e72943865de283d39"
   
