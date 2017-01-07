defmodule SconeHomeElixir.SconelyYoursPayment do
		#use Ecto.Schema
		#import Ecto.Changeset

		use SconeHomeElixir.Web, :model

		@derive {Poison.Encoder, only: [:user_id, :email, :password]}

		schema "order_items" do
			field :user_id, Ecto.UUID
			field :order_id, :string
			field :created_at, Ecto.DateTime, default: Ecto.DateTime.local
			field :status, :string

			#timestamps([{:inserted_at, false}, {:updated_at, false}])
			#timestamps([{:updated_at, false}])
			#timestamps([{:created_at}])
			
			
			#timestamps()
		end


end 