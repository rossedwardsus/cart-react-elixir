defmodule Sconenly.UserDeliveryContact do
		#use Ecto.Schema
		#import Ecto.Changeset

		use SconeHomeElixir.Web, :model

		@derive {Poison.Encoder, only: [:user_id, :email, :password]}

		schema "user_delivery_contacts" do
			field :user_id, Ecto.UUID
			field :name, :string
			field :stripe_token, :string
			
			#timestamps()
		end


end 