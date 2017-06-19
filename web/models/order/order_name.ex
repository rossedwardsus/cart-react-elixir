defmodule Sconely.OrderName do
		#use Ecto.Schema
		#import Ecto.Changeset

		use SconeHomeElixir.Web, :model

		@derive {Poison.Encoder, only: [:user_id, :email, :password]}

		#@primary_key {:order_id, :binary_id, autogenerate: true}

		schema "order_name" do
			field :order_id, Ecto.UUID
			field :first_name, :string
			field :last_name, :string
		end

		#def changeset(struct, params \\ %{}) do
		#    struct
		#    |> cast(params, @required_fields, @optional_fields)
		    #|> validate_required([:email])
		 #   |> validate_length(:email, min: 2)
		    #|> validate_length(:password, min: 2)
		    #contains
		#end

end 