defmodule Sconely.SconelySignatureGuestResponse do
		#use Ecto.Schema
		#import Ecto.Changeset

		use SconeHomeElixir.Web, :model

		@derive {Poison.Encoder, only: [:user_id, :email, :password]}

		@primary_key {:order_id, :binary_id, autogenerate: true}

		schema "orders" do
			field :first_name, :string
			field :last_name, :string
			field :item, :string
			field :message, :string
			
			#timestamps()
		end


end 