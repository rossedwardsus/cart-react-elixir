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



#database-local
#config :scone_home_elixir, SconeHomeElixir.Repo,
#  adapter: Ecto.Adapters.Postgres,
  #database: "scone_home",
  #username: "postgres",
  #password: "",
  #hostname: "localhost"
#  url: "postgres://postgres@localhost/scone_home"


#database-heroku
#config :scone_home_elixir, SconeHomeElixir.Repo,
#  adapter: Ecto.Adapters.Postgres,
  #database: "scone_home",
  #username: "postgres",
  #password: "",
  #hostname: "localhost"
#  url: "postgres://postgres@localhost/scone_home"
   #url: "postgres://zokuppiwdnddjg:C8ipdqtvZ2vB8et-xPDVot87ij@ec2-54-163-240-101.compute-1.amazonaws.com:5432/d72tdu152l44hp"



#database-local
config :scone_home_elixir, SconeHomeElixir.Repo,
  adapter: Ecto.Adapters.Postgres,
  #database: "scone_home",
  #username: "postgres",
  #password: "",
  #hostname: "localhost"
  #url: "postgres://postgres@localhost/sconely_dev"
  url: "postgres://zokuppiwdnddjg:C8ipdqtvZ2vB8et-xPDVot87ij@ec2-54-163-240-101.compute-1.amazonaws.com:5432/d72tdu152l44hp"
  #url: "postgres://rqzuituwviprbp:d7b644fdd03e377a1ca7318849c4a631242b78496bd0d6f87847aad3ab46316d@ec2-54-83-205-71.compute-1.amazonaws.com:5432/d68qdnh6v3kbvs"





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
  #deliver_later_strategy: Bamboo.TaskSupervisorStrategy


config :scone_home_elixir, mailgun_domain: "sandbox60cd8c923f214e8b90257138647a028e.mailgun.org",
                mailgun_key: "key-22e98444fc043c1e72943865de283d39"
   

config :absinthe,
  adapter: Absinthe.Adapter.LanguageConventions


config :twilex,
  sid: "AC235140db287805a778ac7818aa5a3a37",
  token: "fe9f28931893620d4d8110d3659da685"



#test secret key sk_test_Bmak0PLr7NSsKLjZeFvRPptz
#test publishable key pk_test_pY3YMi18Gcw0iUB3BSfmPtpb

config :stripity_stripe, secret_key: "sk_test_Bmak0PLr7NSsKLjZeFvRPptz"
config :stripity_stripe, platform_client_id: "pk_test_pY3YMi18Gcw0iUB3BSfmPtpb"