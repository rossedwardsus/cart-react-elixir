defmodule Sconely.SconelySocialOrders do
		#use Ecto.Schema
		#import Ecto.Changeset

		use SconeHomeElixir.Web, :model

		@derive {Poison.Encoder, only: [:user_id, :email, :password]}

		@primary_key {:order_id, :binary_id, autogenerate: true}

		schema "sconely_social_orders" do
			field :user_id, Ecto.UUID
			field :delivery_date, :string, default: ""
			field :delivery_time, :string, default: ""
			field :delivery_address_street, :string, default: ""
			field :delivery_address_city, :string, default: ""
			field :delivery_address_state, :string, default: ""
			field :delivery_address_zipcode, :string, default: ""
			field :delivery_address_comment, :string, default: ""
			
			
			#timestamps()
		end


end 