defmodule SconeHomeElixir.UserOrder do
		#use Ecto.Schema
		#import Ecto.Changeset

		use SconeHomeElixir.Web, :model

		@derive {Poison.Encoder, only: [:user_id, :email, :password]}

		schema "orders" do
			field :user_id, Ecto.UUID
			field :order_type, :string
			field :event_name, :string
			field :stationary_id, :string
			field :delivery_address_street, :string
			field :delivery_address_city, :string
			field :delivery_address_state, :string
			field :delivery_address_zipcode, :string
			field :status, :string
			field :message_to_guests, :string
			field :delivery_datetime, :string
			
			#timestamps()
		end


end 