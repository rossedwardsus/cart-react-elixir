defmodule Sconely.Error do
		use Ecto.Schema
		import Ecto.Changeset

		#use SconeHomeElixir.Web, :model

		#@derive {Poison.Encoder, only: [:user_id, :email, :password]}

		#@primary_key {:session_id, :binary_id, autogenerate: true}

		schema "errors" do
		
			field :error, :string
			field :created_at, Ecto.DateTime, default: Ecto.DateTime.utc

		end


		def changeset(model, params \\ %{}) do
		    model
		    #|> cast(params, [])
		    #|> cast(params, [:user_id])
		    #|> validate_required(params, [:user_id])
		end

end 