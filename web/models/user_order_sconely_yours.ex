defmodule SconeHomeElixir.SconelyYours do
		#use Ecto.Schema
		#import Ecto.Changeset

		use SconeHomeElixir.Web, :model

		@derive {Poison.Encoder, only: [:user_id, :email, :password]}

		schema "order" do
			field :user_id, Ecto.UUID
			field :order_id, :string
			field :order_type, :string
			field :deliver_address, :string
			field :order_created_date_time, :string
			field :status, :string
			
			#timestamps()
		end


end 