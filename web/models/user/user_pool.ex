defmodule Sconely.UserPool do
		#use Ecto.Schema
		#import Ecto.Changeset

		use SconeHomeElixir.Web, :model

		@optional_fields ~W(email password_hash registration_datetime)
		@primary_key {:id, :binary_id, autogenerate: true}

		schema "user_pools" do
			field :pool_id, :integer
			field :user_id, Ecto.UUID #integer
			field :pool_name, :string
			field :pool_url_name, :string
			#field :default
			
			#timestamps()
		end

		def changeset(struct, params \\ %{}) do
		    struct
		    |> cast(params, @required_fields, @optional_fields)
		    #|> validate_required([:email])
		    #|> validate_length(:user_id, min: 2)
		    |> validate_length(:email, min: 2)
		    #|> validate_length(:password, min: 2)
		    #contains
		end

end 