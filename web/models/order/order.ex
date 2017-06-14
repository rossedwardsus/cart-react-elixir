defmodule Sconely.Order do
	#use Ecto.Schema
	#import Ecto.Changeset

	use SconeHomeElixir.Web, :model

	#@derive {Poison.Encoder, only: [:user_id, :email, :password]}
	@optional_fields ~W()
	@required_fields ~W(order_id user_id order_type created_at payment_confirmation)

	schema "orders" do

		field :order_id, :string #primary key
		field :user_id, :string #Ecto.UUID or "guest"
		field :order_type, :string
		#guest count
		#deliverydatetime for signature
		#name if guest
		field :created_at, Ecto.DateTime, default: Ecto.DateTime.local
		field :payment_confirmation, :string #stripe receipt
		#payment choice for signature
		#event photo

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