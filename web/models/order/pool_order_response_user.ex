defmodule Sconely.PoolOrderResponseUser do
	#use Ecto.Schema
	#import Ecto.Changeset

	use SconeHomeElixir.Web, :model

	@primary_key {:id, :binary_id, autogenerate: true}

	@optional_fields ~W(user_id order_id admin_receipt_order_id stripe_charge_token)
	@required_fields ~W()

	schema "pool_order_responses_user" do

		field :order_id, Ecto.UUID
		field :user_id, Ecto.UUID
		field :admin_receipt_order_id, :integer
		#field :first_name, :string
		#field :last_name, :string
		#field :email, :string
		#field :mobile, :string
		#field :order_datetime, Ecto.DateTime, default: Ecto.DateTime.utc
		field :stripe_charge_token, :string
		#field :message_note, :string

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