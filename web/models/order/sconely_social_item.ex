defmodule Sconenly.SconelySocialItems do
		#use Ecto.Schema
		#import Ecto.Changeset

		use SconeHomeElixir.Web, :model

		@derive {Poison.Encoder, only: [:user_id, :email, :password]}

		@primary_key {:order_id, :binary_id, autogenerate: true}

		schema "sconely_social_items" do
			field :user_id, Ecto.UUID
			field :item_id, :string
			field :quantity, :string
			
			#timestamps()
		end


end 