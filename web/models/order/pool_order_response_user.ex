defmodule Sconely.PoolOrderResponseUser do
	#use Ecto.Schema
	#import Ecto.Changeset

	use SconeHomeElixir.Web, :model

	#@derive {Poison.Encoder, only: [:user_id, :email, :password]}
	@optional_fields ~W(user_id order_id admin_receipt_order_id stripe_charge_token)
	@required_fields ~W()

	schema "pool_order_responses_user" do

		field :order_id, :integer
		field :user_id, :integer #Ecto.UUID or "guest" gotten from pool order response user
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