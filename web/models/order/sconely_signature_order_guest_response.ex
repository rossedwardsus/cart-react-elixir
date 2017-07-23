defmodule Sconely.SignatureOrderGuestResponse do
		#use Ecto.Schema
		#import Ecto.Changeset

		use SconeHomeElixir.Web, :model

		#@derive {Poison.Encoder, only: [:user_id, :email, :password]}
		@optional_fields ~W(parent_order_id chosen_item_id first_name last_name email)
		@required_fields ~W()

		schema "signature_order_guest_responses" do
			field :parent_order_id, :string
			field :chosen_item_id, :integer
			field :first_name, :string
			field :last_name, :string
			field :email, :string
			#field :mailing_list, :boolean
			field :created_at, Ecto.DateTime, default: Ecto.DateTime.from_erl(:erlang.localtime)
			#field :datetime_selected, Ecto.DateTime, default: Ecto.DateTime.utc

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