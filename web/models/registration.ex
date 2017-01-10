defmodule Sconely.Registration do
		#use Ecto.Schema
		#import Ecto.Changeset

		use SconeHomeElixir.Web, :model

		@derive {Poison.Encoder, only: [:email, :password]}

		@primary_key {:user_id, :binary_id, autogenerate: true}

		schema "registration" do
			#field :user_id, :string
			field :email, :string
			field :password, :string
			field :password_salt, :string
			field :registration_datetime, :string
			field :created_at, Ecto.DateTime, default: Ecto.DateTime.local
			field :active, :string

			#timestamps([{:inserted_at, false}, {:updated_at, false}])
			#timestamps([{:updated_at, false}])
			#timestamps([{:created_at}])
			

			#timestamps()
		end

		def changeset(model, params \\ %{}) do
		    model
		    |> cast(params, [:email, :password, :registration_datetime])
		    #|> cast(params, [])
		    #|> validate_required([:name, :email, :bio, :number_of_pets])
		end

end 