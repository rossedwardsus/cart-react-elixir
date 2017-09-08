defmodule Sconely.PoolOrder do
		#use Ecto.Schema
		#import Ecto.Changeset

		#alias Sconely.Order

		use SconeHomeElixir.Web, :model

		#@derive {Poison.Encoder, only: [:user_id, :email, :password]}

		schema "order_delivery_contact_address" do
			field :user_id, Ecto.UUID
			field :order_id, Ecto.UUID
			field :pool_name, :string
			field :delivery_contact_first_name, :string
			field :delivery_contact_last_name, :string
			field :delivery_contact_email, :string
			field :delivery_contact_mobile, :string
			#field :delivery_address_street1
			#field :delivery_address_street2
			#field :delivery_address_city
			#field :delivery_address_state
			#field :delivery_address_zipcode
			#datetime created
			#delivery datetime
			
			#belongs_to :order, Order		
			#has_one :order, Order, join_key: :order_id
			
			#timestamps()
		end


		#def changeset(model, params \\ %{}) do
		#    model
		#    |> cast(params, [:email, :password, :registration_datetime])
		    #|> cast(params, [])
		    #|> validate_required([:name, :email, :bio, :number_of_pets])
		#end

end 