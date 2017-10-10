defmodule Sconely.UserPool do
		#use Ecto.Schema
		#import Ecto.Changeset

		use SconeHomeElixir.Web, :model

		@derive {Poison.Encoder, only: [:user_id, :email, :password]}

		@primary_key {:id, :binary_id, autogenerate: true}

		schema "user_pools" do
			field :pool_id, :integer
			field :user_id, Ecto.UUID #integer
			field :pool_name, :string
			field :pool_url_name, :string
			#field :default
			
			#timestamps()
		end


end 