defmodule Sconely.OrderItems do
		#use Ecto.Schema
		#import Ecto.Changeset

		use SconeHomeElixir.Web, :model

		@derive {Poison.Encoder, only: [:user_id, :email, :password]}

		#@primary_key {:order_id, :binary_id, autogenerate: true}

		schema "order_items" do
			field :order_id, Ecto.UUID #integer
			field :item_id, :string #integer
			field :quantity, :string #integer
			field :mini, :boolean		
		end

		#def changeset(struct, params \\ %{}) do
		#    struct
		#    |> cast(params, @required_fields, @optional_fields)
		    #|> validate_required([:email])
		#    |> validate_length(:email, min: 2)
		    #|> validate_length(:password, min: 2)
		    #contains
		#end

end 