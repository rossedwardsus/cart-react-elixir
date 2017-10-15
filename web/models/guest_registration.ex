defmodule Sconely.GuestRegistration do
		#use Ecto.Schema
		#import Ecto.Changeset

		use SconeHomeElixir.Web, :model

		@optional_fields ~W(email registration_datetime)
		@required_fields ~W()

		@primary_key {:user_id, :binary_id, autogenerate: true}

		schema "guest_registration" do
			field :email, :string
			field :registration_datetime, Ecto.DateTime
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