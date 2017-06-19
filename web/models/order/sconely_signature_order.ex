defmodule Sconely.SconelySignatureOrder do
		#use Ecto.Schema
		#import Ecto.Changeset

		use SconeHomeElixir.Web, :model

		@derive {Poison.Encoder, only: [:order_id, :event_name]}

		@primary_key {:order_id, :binary_id, autogenerate: true}

		schema "sconely_signature_orders" do
			field :event_name, :string
			#field :number_of_guests, :string
			#field :event_date, :string
			#field :event_time, :string
			field :code, :string
			field :guest_count, :string
			field :image_uploaded, :string
			field :message, :string
			
			#field :created_at, Ecto.DateTime, default: Ecto.DateTime.local
			#field :delivery_address_street, :string, default: ""
			#field :delivery_address_city, :string, default: ""
			#field :delivery_address_state, :string, default: ""
			#field :delivery_address_zipcode, :string, default: ""
			#field :delivery_address_comment, :string, default: ""
			#field :status, :string
			field :total, :string

			#timestamps([{:inserted_at, false}, {:updated_at, false}])
			#timestamps([{:updated_at, false}])
			#timestamps([{:created_at}])
			
		end

		def changeset(struct, params \\ %{}) do
		    struct
		    |> cast(params, [:event_name, :event_date, :event_time])
	    end

end 


#mutation CreatePost { post(title: "Second", body: "We're off to a great start!") { id }}