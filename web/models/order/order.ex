defmodule Sconely.Order do
	#use Ecto.Schema
	#import Ecto.Changeset

	use SconeHomeElixir.Web, :model

	#@derive {Poison.Encoder, only: [:user_id, :email, :password]}
	@optional_fields ~W()
	@required_fields ~W(user_id order_type delivery_datetime)

	schema "orders" do

		#field :order_id, :string #primary key
		field :user_id, :string #Ecto.UUID or "guest"
		field :order_type, :string
		#field :delivery_address_street1
		#field :delivery_address_street2
		#field :delivery_address_city
		#field :delivery_address_state
		#field :delivery_address_zipcode
		field :delivery_datetime, Ecto.DateTime
		

		#datetime
		#payment confirmation

		#guest count
		#deliverydatetime for signature
		#name if guest
		field :created_at, Ecto.DateTime, default: Ecto.DateTime.utc
		#field :payment_confirmation, :string #stripe receipt
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