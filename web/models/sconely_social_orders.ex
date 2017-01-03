defmodule Sconely.SconelySocialOrders do
		#use Ecto.Schema
		#import Ecto.Changeset

		use SconeHomeElixir.Web, :model

		@derive {Poison.Encoder, only: [:user_id, :email, :password]}

		schema "sconely_social" do
			field :user_id, Ecto.UUID
			field :order_id, :string
			field :delivery_datetime, :string
			field :delivery_address, :string
			
			#timestamps()
		end


end 