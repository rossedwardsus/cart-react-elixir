defmodule Sconely.UserPaymentMethod do
		#use Ecto.Schema
		#import Ecto.Changeset

		use SconeHomeElixir.Web, :model

		@primary_key {:id, :binary_id, autogenerate: true}

		@optional_fields ~W(user_id payment_method_id brand stripe_payment_token)
		@required_fields ~W()

		schema "user_payment_methods" do
			field :user_id, Ecto.UUID
			field :payment_method_id, :integer
			field :brand, :string
			field :last_four_digits, :string
			field :stripe_payment_token, :string
			#field :default
			
			#timestamps()
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