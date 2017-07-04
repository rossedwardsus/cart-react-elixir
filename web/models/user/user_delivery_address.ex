defmodule Sconely.UserDeliveryAddress do
		#use Ecto.Schema
		#import Ecto.Changeset

		use SconeHomeElixir.Web, :model

		@derive {Poison.Encoder, only: [:user_id, :email, :password]}

		schema "user_delivery_addresses" do
			field :user_id, Ecto.UUID
			field :name, :string
			field :stripe_token, :string
			
			#timestamps()
		end


end 