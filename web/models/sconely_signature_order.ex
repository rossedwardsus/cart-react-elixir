defmodule Sconely.SconelySignatureOrder do
		#use Ecto.Schema
		#import Ecto.Changeset

		use SconeHomeElixir.Web, :model

		@derive {Poison.Encoder, only: [:order_id, :event_name]}

		@primary_key {:order_id, :binary_id, autogenerate: true}

		schema "sconely_signature_orders" do
			field :host_id, :string
			field :event_name, :string
			field :created_at, Ecto.DateTime, default: Ecto.DateTime.local

			#timestamps([{:inserted_at, false}, {:updated_at, false}])
			#timestamps([{:updated_at, false}])
			#timestamps([{:created_at}])
			
		end

		def changeset(struct, params \\ %{}) do
		    struct
		    |> cast(params, [])
	    end

end 


#mutation CreatePost { post(title: "Second", body: "We're off to a great start!") { id }}