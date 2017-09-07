defmodule SconeHomeElixir.Mixfile do
  use Mix.Project

  def project do
    [app: :scone_home_elixir,
     version: "0.0.1",
     elixir: "~> 1.4",
     elixirc_paths: elixirc_paths(Mix.env),
     compilers: [:phoenix] ++ Mix.compilers,
     build_embedded: Mix.env == :prod,
     start_permanent: Mix.env == :prod,
     aliases: aliases,
     deps: deps]
  end

  # Configuration for the OTP application.
  #
  # Type `mix help compile.app` for more information.
  def application do
    [mod: {SconeHomeElixir, []},
     applications: [:phoenix, :phoenix_html, :cowboy, :logger,
                    :phoenix_ecto, :postgrex, :bamboo, :timex, :tzdata, :absinthe, :absinthe_plug, :ex_aws, :hackney, :poison, :comeonin, :twilex, :guardian, :calendar, :stripe]]
  end

  # Specifies which paths to compile per environment.
  defp elixirc_paths(:test), do: ["lib", "web", "test/support"]
  defp elixirc_paths(_),     do: ["lib", "web"]

  # Specifies your project dependencies.
  #
  #{:phoenix_ecto, "~> 2.0.1"},
  #
  #dont need
  #{:twilex, "~> 0.0.1"},
  #{:comeonin, "~> 3.0"},
  #{:phoenix_ecto, "~> 2.0.1"},
  #{:mogrify, "~> 0.3.2"},
  #{:tzdata, "~> 0.5.8"},
  #{:httpoison, "~> 0.8.0"},
  #{:erlcloud, git: "https://github.com/gleber/erlcloud"},

  #{:stripity_stripe, "~> 1.4.0"},
     
    
     
  # Type `mix help deps` for examples and options.
  defp deps do
    [{:phoenix, "~> 1.2.0"},
     {:phoenix_ecto, "~> 2.0.1"},
     {:postgrex, ">= 0.0.0"},
     {:phoenix_html, "~> 2.6.0"},
     {:phoenix_live_reload, "~> 1.0", only: :dev},
     {:cowboy, "~> 1.0"},
     {:poison, "~> 2.1", override: true},
     {:comeonin, "~> 3.0"},
     {:arc, "~> 0.6.0"},
     {:bamboo, "~> 0.6"},
     {:mailgun, "~> 0.1.2"},
     {:bamboo_postmark, "~> 0.4"},
     {:twilex, "~> 0.0.1"},
     {:stripe, "~> 0.7.1", hex: :stripe_elixir},
     {:mogrify, "~> 0.3.2"},
     {:gm, "~> 0.0.1"},
     {:ex_aws, "~> 1.0.0"},
     {:uuid, "~> 1.1"},
     {:secure_random, "~> 0.5"},
     {:csv, "~> 1.4.2"},
     {:plug, "~> 1.0"},
     {:timex, "~> 3.0"},
     {:hackney, "~> 1.0", override: true},
     {:httpoison, "~> 0.8.0", override: true},
     {:tzdata, "~> 0.5.8"},
     #{:graphql, "~> 0.3"},
     {:absinthe, "~> 1.1.0"},
     {:absinthe_plug, "~> 1.1"},
     {:cors_plug, "~> 1.2"},
     {:guardian, "~> 0.14"},
     {:calendar, "~> 0.17.2"}]
  end

  # Aliases are shortcut or tasks specific to the current project.
  # For example, to create, migrate and run the seeds file at once:
  #
  #     $ mix ecto.setup
  #
  # See the documentation for `Mix` for more info on aliases.
  defp aliases do
    ["ecto.setup": ["ecto.create", "ecto.migrate", "run priv/repo/seeds.exs"],
     "ecto.reset": ["ecto.drop", "ecto.setup"]]
  end
end
