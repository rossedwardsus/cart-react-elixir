defmodule Sconely.UserPool do
		#use Ecto.Schema
		#import Ecto.Changeset

		use SconeHomeElixir.Web, :model

		@derive {Poison.Encoder, only: [:user_id, :email, :password]}

		schema "user_pools" do
			field :user_id, :integer #integer
			field :pool_id, :integer
			field :pool_name, :string
			field :pool_url_name, :string
			#field :default
			
			#timestamps()
		end


end 