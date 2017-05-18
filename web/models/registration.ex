defmodule Sconely.Registration do
		#use Ecto.Schema
		#import Ecto.Changeset

		use SconeHomeElixir.Web, :model

		#@derive {Poison.Encoder, only: [:email, :password]}

		#@valid_attrs %{email: "", password: ""}
		@optional_fields ~W()
		@required_fields ~W(user_id email password password_salt)

		#@primary_key {:user_id, :binary_id, autogenerate: true}

		schema "registration" do
			field :user_id, Ecto.UUID
			field :email, :string
			field :password, :string
			field :password_salt, :string
			field :created_at, Ecto.DateTime, default: Ecto.DateTime.utc
			field :activated, :boolean, default: false
		end

		def changeset(struct, params \\ %{}) do
		    struct
		    |> cast(params, @required_fields, @optional_fields)
		    #|> validate_required([:email])
		    #|> validate_length(:email, min: 2)
		    #|> validate_length(:password, min: 2)
		    #contains
		end

end 