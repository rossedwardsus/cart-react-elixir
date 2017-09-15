defmodule Sconely.Order do
	#use Ecto.Schema
	#import Ecto.Changeset
	#alias Sconely.OrderDeliveryAddress

	use SconeHomeElixir.Web, :model

	#@derive {Poison.Encoder, only: [:user_id, :email, :password]}
	@optional_fields ~W(user_id order_id order_type delivery_contact_first_name delivery_contact_last_name delivery_contact_email delivery_contact_mobile delivery_datetime delivery_time)
	@required_fields ~W()

	schema "orders" do

		field :order_id, :string #primary key #secure random #integer
		field :user_id, :string #Ecto.UUID
		field :order_type, :string
		#delivery contact address id

		#field delivery_contact_address_id
		field :delivery_contact_first_name, :string
		field :delivery_contact_last_name, :string
		field :delivery_contact_email, :string
		field :delivery_contact_mobile, :string
		#field :delivery_address_street1
		#field :delivery_address_street2
		#field :delivery_address_city
		#field :delivery_address_state
		#field :delivery_address_zipcode # only certain zipcodes
		#delivery_contact_address_note
		field :delivery_datetime, Ecto.DateTime
		#field :delivery_date, Ecto.Date #only certain days
		#field :social_delivery_time, :string #range
		#field :yours_delivery_time_range, :string
		#field message
		#payment_method_id 0 for guest?
		#stripe_receipt_token, :string
		#status
		#note
		field :created_at, Ecto.DateTime, default: Ecto.DateTime.utc

		#has_one :order_delivery_address, {"order_delivery_address", OrderDeliveryAddress}
		#has_one :order_delivery_address, OrderDeliveryAddress, foreign_key: :order_id
		#belongs_to :order_delivery_address, OrderDeliveryAddress, foreign_key: :order_id

		#has_many :order_delivery_address, OrderDeliveryAddress

		
	end

	def changeset(struct, params \\ %{}) do
	    struct
	    |> cast(params, @required_fields, @optional_fields)
	    #|> validate_required([:email])
	    #|> validate_length(:email, min: 2)
	    #|> validate_length(:password, min: 2)
	    #contains
	end

	def update_changeset(struct, params \\ %{}) do
	    struct
	    |> cast(params, @required_fields, @optional_fields)
	    #|> validate_required([:email])
	    #|> validate_length(:email, min: 2)
	    #|> validate_length(:password, min: 2)
	    #contains
	end

end 