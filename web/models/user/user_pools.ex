defmodule SconeHomeElixir.UserPools do
		#use Ecto.Schema
		#import Ecto.Changeset

		use SconeHomeElixir.Web, :model

		@derive {Poison.Encoder, only: [:user_id, :email, :password]}

		schema "user_payment_methods" do
			field :user_id, Ecto.UUID #integer
			field :pool_id, :string
			#field :pool_name, :string
			#field :stripe_payment_token, :string
			#field :default
			
			#timestamps()
		end


end 