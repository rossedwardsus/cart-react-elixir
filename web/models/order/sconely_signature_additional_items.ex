defmodule Sconely.SconelySignatureAdditionalItems do
		#use Ecto.Schema
		#import Ecto.Changeset

		use SconeHomeElixir.Web, :model

		@derive {Poison.Encoder, only: [:user_id, :email, :password]}

		schema "orders" do
			field :order_id, Ecto.UUID
			field :host_id, :string
			field :item_id, :string
			field :created_at, Ecto.DateTime, default: Ecto.DateTime.local
			
			#timestamps([{:inserted_at, false}, {:updated_at, false}])
			#timestamps([{:updated_at, false}])
			#timestamps([{:created_at}])
			
			
			#timestamps()
		end


end 