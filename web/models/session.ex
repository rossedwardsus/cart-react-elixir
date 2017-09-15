defmodule Sconely.Session do
		use Ecto.Schema
		import Ecto.Changeset

		#use SconeHomeElixir.Web, :model

		#@derive {Poison.Encoder, only: [:user_id, :email, :password]}
		#@primary_key {:session_id, :binary_id, autogenerate: true}

		@optional_fields ~W(user_id token)
		@required_fields ~W()

		schema "sessions" do
			#field :session_id, Ecto.UUID
			field :user_id, :string #integer
			field :token, Ecto.UUID
			field :created_at, Ecto.DateTime, default: Ecto.DateTime.utc
			#field :active, :string

			#timestamps([{:inserted_at, false}, {:updated_at, false}])
			#timestamps([{:updated_at, false}])
			#timestamps([{:created_at}])
			
			
			#timestamps()
		end


		def changeset(model, params \\ %{}) do
		    model
		    |> cast(params, @required_fields, @optional_fields)
		    #|> validate_required(params, [:user_id])
		end

end 