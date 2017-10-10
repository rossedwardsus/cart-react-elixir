defmodule Sconely.OrderItem do
		#use Ecto.Schema
		#import Ecto.Changeset

		use SconeHomeElixir.Web, :model

		#@derive {Poison.Encoder, only: [:user_id, :email, :password]}

		@optional_fields ~W(parent_order_id user_id menu_item_id quantity size)
		@required_fields ~W()

		@primary_key {:id, :binary_id, autogenerate: true}

		schema "order_items" do
			field :user_id, Ecto.UUID
			field :parent_order_id, Ecto.UUID
			field :menu_item_id, :integer
			field :quantity, :integer #integer
			field :size, :string	
		end

		def changeset(struct, params \\ %{}) do
		    struct
		    |> cast(params, @required_fields, @optional_fields)
		    #|> validate_required([:email])
		#    |> validate_length(:email, min: 2)
		    #|> validate_length(:password, min: 2)
		    #contains
		end

end 