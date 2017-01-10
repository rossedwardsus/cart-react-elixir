defmodule Sconely.SconelySignatureOrderAdditionalItem do
		#use Ecto.Schema
		#import Ecto.Changeset

		use SconeHomeElixir.Web, :model

		@derive {Poison.Encoder, only: [:user_id, :email, :password]}

		@primary_key {:order_id, :binary_id, autogenerate: true}

		schema "sconely_signature_order_additional_items" do
			#field :order_id, :string
			field :item_id, :string
			field :quantity, :string
			#field :created_at, Ecto.DateTime, default: Ecto.DateTime.local
			
			#timestamps([{:inserted_at, false}, {:updated_at, false}])
			#timestamps([{:updated_at, false}])
			#timestamps([{:created_at}])
			
			
			#timestamps()
		end


end 