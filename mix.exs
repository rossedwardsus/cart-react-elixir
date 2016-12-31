defmodule SconeHomeElixir.Mixfile do
  use Mix.Project

  def project do
    [app: :scone_home_elixir,
     version: "0.0.1",
     elixir: "~> 1.0",
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
                    :phoenix_ecto, :postgrex, :bamboo, :timex, :tzdata, :stripity_stripe, :graphql]]
  end

  # Specifies which paths to compile per environment.
  defp elixirc_paths(:test), do: ["lib", "web", "test/support"]
  defp elixirc_paths(_),     do: ["lib", "web"]

  # Specifies your project dependencies.
  #
  # Type `mix help deps` for examples and options.
  defp deps do
    [{:phoenix, "~> 1.2.0"},
     {:phoenix_ecto, "~> 1.1"},
     {:postgrex, ">= 0.0.0"},
     {:phoenix_html, "~> 2.1"},
     {:phoenix_live_reload, "~> 1.0", only: :dev},
     {:cowboy, "~> 1.0"},
     {:poison, "~> 2.1", override: true},
     {:arc, "~> 0.5.2"},
     {:bamboo, "~> 0.6"},
     {:mailgun, "~> 0.1.2"},
     {:mogrify, "~> 0.3.2"},
     {:gm, "~> 0.0.1"},
     {:ex_aws, "~> 0.5.0"},
     #{:erlcloud, git: "https://github.com/gleber/erlcloud"},
     {:uuid, "~> 1.1"},
     {:csv, "~> 1.4.2"},
     {:plug, "~> 1.0"},
     {:timex, "~> 3.0"},
     {:hackney, "~> 1.0", override: true},
     {:stripity_stripe, "~> 1.4.0"},
     {:httpoison, "~> 0.8.0"},
     {:tzdata, "~> 0.5.8"},
     {:graphql, "~> 0.3"}]
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
