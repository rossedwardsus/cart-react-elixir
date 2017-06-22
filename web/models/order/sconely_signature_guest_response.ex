defmodule Sconely.SconelySignatureGuestResponse do
		#use Ecto.Schema
		#import Ecto.Changeset

		use SconeHomeElixir.Web, :model

		#@derive {Poison.Encoder, only: [:user_id, :email, :password]}
		@optional_fields ~W()
		@required_fields ~W(order_id item_id first_name last_name)

		schema "guest_responses" do
			field :order_id, :string
			field :item_id, :string
			field :first_name, :string
			field :last_name, :string
			field :created_at, Ecto.DateTime, default: Ecto.DateTime.utc
			
			#timestamps()
		end

		def changeset(struct, params \\ %{}) do
		    struct
		    |> cast(params, @required_fields, @optional_fields)
		    #|> validate_required([:email])
		    #|> validate_length(:email, min: 2)
		    #|> validate_length(:password, min: 2)
		    #contains
		end

end 