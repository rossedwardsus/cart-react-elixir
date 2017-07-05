defmodule Sconely.UserDeliveryAddress do
		#use Ecto.Schema
		#import Ecto.Changeset

		use SconeHomeElixir.Web, :model

		#@derive {Poison.Encoder, only: [:user_id, :email, :password]}

		schema "user_delivery_addresses" do
			field :user_id, Ecto.UUID
			field :name, :string
			field :street1, :string
			field :street2, :string
			field :city, :string
			field :state, :string
			field :zipcode, :string
			
			#timestamps()
		end


end 