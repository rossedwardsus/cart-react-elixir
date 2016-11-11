defmodule SconeHomeElixir.SconelyYoursPayment do
		#use Ecto.Schema
		#import Ecto.Changeset

		use SconeHomeElixir.Web, :model

		@derive {Poison.Encoder, only: [:user_id, :email, :password]}

		schema "order_items" do
			#field :user_id, Ecto.UUID
			field :order_id, :string
			field :item_id, :string
			
			#timestamps()
		end


end 