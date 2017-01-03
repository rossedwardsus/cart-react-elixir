defmodule Sconely.UserOrderSconelyYours do
		#use Ecto.Schema
		#import Ecto.Changeset

		use SconeHomeElixir.Web, :model

		@derive {Poison.Encoder, only: [:user_id, :email, :password]}

		@primary_key {:id, :string, []}
		#@primary_key false
		schema "sconely_yours_orders" do
			#field :id, :string
			field :user_id, Ecto.UUID
			field :order_id, Ecto.UUID
			field :delivery_address, :string
			field :order_created_datetime, :string
			field :status, :string
			
			#timestamps()
		end

		#@required_fields ~w(user_id)
    	#@optional_fields ~w(order_id delivery_address)

		def changeset(struct, params \\ %{}) do
		    struct
		    |> cast(params, ~w(id user_id order_id delivery_address order_created_datetime status), [])
	    end
end 