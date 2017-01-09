defmodule Sconely.SconelySocialOrders do
		#use Ecto.Schema
		#import Ecto.Changeset

		use SconeHomeElixir.Web, :model

		@derive {Poison.Encoder, only: [:user_id, :email, :password]}

		@primary_key {:order_id, :binary_id, autogenerate: true}

		schema "sconely_social_orders" do
			field :user_id, Ecto.UUID
			field :delivery_datetime, :string
			field :delivery_address, :string
			
			#timestamps()
		end


end 