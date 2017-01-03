defmodule SconeHomeElixir.UserOrderGuestResponse do
		#use Ecto.Schema
		#import Ecto.Changeset

		use SconeHomeElixir.Web, :model

		@derive {Poison.Encoder, only: [:user_id, :email, :password]}

		schema "orders" do
			field :order_id, Ecto.UUID
			field :name, :string
			field :response, :string
			
			#timestamps()
		end


end 