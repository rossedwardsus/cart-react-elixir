defmodule Sconely.SconelySignatureOrders do
		#use Ecto.Schema
		#import Ecto.Changeset

		use SconeHomeElixir.Web, :model

		@derive {Poison.Encoder, only: [:user_id, :email, :password]}

		schema "sconely_signature_orders" do
			field :user_id, Ecto.UUID
			field :order_id, :string
			field :event_name
			field :event_datetime, :date
			field :delivery_datetime, :date
			field :delivery_address, :string
			field :guest_count, :number
			field :custom_code, :string
			
			#timestamps()
		end

end 