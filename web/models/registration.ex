defmodule Sconely.Registration do
		use Ecto.Schema
		import Ecto.Changeset

		#use SconeHomeElixir.Web, :model

		#@derive {Poison.Encoder, only: [:email, :password]}

		#@valid_attrs %{email: "", password: ""}
		#@required_fields %{email: "", password: ""}

		@primary_key {:user_id, :binary_id, autogenerate: true}

		schema "registration" do
			#field :user_id, :string
			#field :first_name, :string
			field :email, :string
			field :password, :string
			field :password_salt, :string
			#field :registration_datetime, :string
			field :created_at, Ecto.DateTime, default: Ecto.DateTime.utc
			field :activated, :boolean

			#timestamps([{:inserted_at, false}, {:updated_at, false}])
			#timestamps([{:updated_at, false}])
			#timestamps([{:created_at}])
			

			#timestamps()
		end

		def changeset(struct, params \\ %{}) do
		    struct
		    |> cast(params, [:first_name, :email, :password])
		    #|> validate_required([:email, :password])
		    |> validate_length(:first_name, min: 2)
		    #|> validate_length(:email, min: 2)
		end

end 