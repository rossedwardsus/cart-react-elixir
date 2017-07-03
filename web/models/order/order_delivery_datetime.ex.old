defmodule Sconely.OrderDatetime do
		#use Ecto.Schema
		#import Ecto.Changeset

		use SconeHomeElixir.Web, :model

		@derive {Poison.Encoder, only: [:user_id, :email, :password]}

		@required_fields ~W(order_id)

		#@primary_key {:order_id, :binary_id, autogenerate: true}

		schema "sconely_social_items" do
			field :order_id, Ecto.UUID
			field :date, Ecto.Date
			field :time, :string
			
			#timestamps()
		end

		def changeset(struct, params \\ %{}) do
		    struct
		    |> cast(params, @required_fields)
		    #|> validate_required([:email])
		    |> validate_length(:email, min: 2)
		    #|> validate_length(:password, min: 2)
		    #contains
		end

end 