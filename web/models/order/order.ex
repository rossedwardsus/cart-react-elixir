defmodule Sconely.Order do

	#is this needed
	#provdes for a faster lookup maybe??
	#can lookup based on order_type

	#use Ecto.Schema
	#import Ecto.Changeset
	#alias Sconely.OrderDeliveryAddress

	use SconeHomeElixir.Web, :model

	@primary_key {:order_id, :binary_id, autogenerate: true}
	
	@optional_fields ~W(user_id order_type order_id admin_receipt_order_id order_datetime)
	@required_fields ~W()

	schema "orders" do

		field :user_id, Ecto.UUID
		field :admin_receipt_order_id, :integer #primary key #secure random #integer
		field :order_type, :string #yours, social, pool_host, pool_response
		#field :delivery_contact_address_id, :integer
		#payment_method_id
		field :order_datetime, Ecto.DateTime
		#field :status, :string
		#delivery_contact_address_note
		#field :delivery_datetime, Ecto.DateTime
		#field :delivery_time, :string
		#field :delivery_date, Ecto.Date #only certain days
		#field :social_delivery_time, :string #range
		#field :yours_delivery_time_range, :string
		
		#field message/note
		
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