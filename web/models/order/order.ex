defmodule Sconely.Order do

	#is this needed
	#provdes for a faster lookup maybe??
	#can lookup based on order_type

	#use Ecto.Schema
	#import Ecto.Changeset
	#alias Sconely.OrderDeliveryAddress

	use SconeHomeElixir.Web, :model

	#@derive {Poison.Encoder, only: [:user_id, :email, :password]}
	@optional_fields ~W(user_id order_type order_id admin_receipt_order_id order_datetime)
	@required_fields ~W()

	schema "orders" do

		field :order_id, :integer
		field :admin_receipt_order_id, :integer #primary key #secure random #integer
		field :user_id, :integer #Ecto.UUID
		field :order_type, :string #yours, social, pool_host, pool_response
		#field :delivery_contact_address_id, :integer
		#payment_method_id
		field :order_datetime, Ecto.DateTime
		#field :status, :string

		#field delivery_contact_address_id
		#field :delivery_contact_first_name, :string
		#field :delivery_contact_last_name, :string
		#field :delivery_contact_email, :string
		#field :delivery_contact_mobile, :string
		#field :delivery_address_street1
		#field :delivery_address_street2
		#field :delivery_address_city
		#field :delivery_address_state
		#field :delivery_address_zipcode # only certain zipcodes
		#delivery_contact_address_note
		#field :delivery_datetime, Ecto.DateTime
		#field :delivery_time, :string
		#field :delivery_date, Ecto.Date #only certain days
		#field :social_delivery_time, :string #range
		#field :yours_delivery_time_range, :string
		
		#field message/note
		
		
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