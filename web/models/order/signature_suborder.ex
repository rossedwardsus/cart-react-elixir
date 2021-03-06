defmodule Sconely.SignatureSuborder do
	#use Ecto.Schema
	#import Ecto.Changeset

	use SconeHomeElixir.Web, :model

	@primary_key {:id, :binary_id, autogenerate: true}

	@optional_fields ~W()
	@required_fields ~W(user_id order_type delivery_datetime)

	schema "signature_suborders" do

		field :parent_order_id, Ecto.UUID #primary key #uuid
		field :suborder_id, Ecto.UUID #uuid
		field :order_type, :string #invited_guests or additional items
		field :total_amount_due, :string
		field :paid_token, :string 
		#suborder_id if items
		#datetime_processed
		
		#datetime
		#payment confirmation

		#guest count
		#deliverydatetime for signature
		#name if guest
		#field :created_at, Ecto.DateTime, default: Ecto.DateTime.utc
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