defmodule Sconely.SignatureOrder do
		#use Ecto.Schema
		#import Ecto.Changeset

		use SconeHomeElixir.Web, :model

		@derive {Poison.Encoder, only: [:order_id, :event_name]}

		@primary_key {:id, :binary_id, autogenerate: true}

		#signature_event_details?

		schema "signature_orders" do
			field :parent_order_id, Ecto.UUID #uuid
			#user_id
			field :event_url_name, :string
			field :event_long_name, :string
			field :invited_guest_count, :string
			field :invited_guest_message, :string
			#field :image_uploaded, :string
			
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